import { isBrowser } from "@brb-ui/utils";
import { Dispatch, SetStateAction, useCallback, useState, useRef, useLayoutEffect } from "react";

type parserOptions<T> =
  | {
      raw: true;
    }
  | {
      raw: false;
      serializer: (value: T) => string;
      deserializer: (value: string) => T;
    };

const noop = () => {};

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
  options?: parserOptions<T>
): [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => void] => {
  const deserializer = options ? (options.raw ? (value: string) => value : options.deserializer) : JSON.parse;

  const initializer = useRef((key: string) => {
    try {
      const serializer = options ? (options.raw ? String : options.serializer) : JSON.stringify;

      const localStorageValue = localStorage.getItem(key);
      if (localStorageValue !== null) {
        return deserializer(localStorageValue);
      } else {
        if (initialValue) {
          localStorage.setItem(key, serializer(initialValue));
        }
        return initialValue;
      }
    } catch {
      // If user is in private mode or has storage restriction
      // localStorage can throw. JSON.parse and JSON.stringify
      // can throw, too.
      return initialValue;
    }
  });

  const [state, setState] = useState<T | undefined>(() => {
    if (!isBrowser || !key) {
      return initialValue;
    }
    return initializer.current(key);
  });

  useLayoutEffect(() => {
    if (!isBrowser || !key) {
      return;
    }
    setState(initializer.current(key));
  }, [key]);

  const set: Dispatch<SetStateAction<T | undefined>> = useCallback(
    (valOrFunc) => {
      if (!isBrowser || !key) {
        return;
      }
      try {
        const newState = typeof valOrFunc === "function" ? (valOrFunc as Function)(state) : valOrFunc;
        if (typeof newState === "undefined") return;
        let value: string;

        if (options)
          if (options.raw)
            if (typeof newState === "string") value = newState;
            else value = JSON.stringify(newState);
          else if (options.serializer) value = options.serializer(newState);
          else value = JSON.stringify(newState);
        else value = JSON.stringify(newState);

        localStorage.setItem(key, value);
        setState(deserializer(value));
      } catch {
        // If user is in private mode or has storage restriction
        // localStorage can throw. Also JSON.stringify can throw.
      }
    },
    [key, setState, state, options, deserializer]
  );

  const remove = useCallback(() => {
    if (!isBrowser || !key) {
      return;
    }
    try {
      localStorage.removeItem(key);
      setState(undefined);
    } catch {
      // If user is in private mode or has storage restriction
      // localStorage can throw.
    }
  }, [key, setState]);

  if (!isBrowser) {
    return [initialValue as T, noop, noop];
  }
  if (!key) {
    throw new Error("useLocalStorage key may not be falsy");
  }

  return [state, set, remove];
};
