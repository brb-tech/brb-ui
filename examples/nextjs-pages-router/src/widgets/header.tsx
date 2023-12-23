import { Button, styled, useSystem } from "@brb-ui/core";
import { FaMoon, FaSun } from "react-icons/fa6";

const Wrapper = styled.header`
  height: 64px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blueGray[3]};
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header: React.FC = () => {
  const { themeMode, setThemeMode } = useSystem();

  return (
    <Wrapper>
      <span>Next Page</span>
      <Button
        icon={themeMode === "dark" ? <FaSun /> : <FaMoon />}
        css={{ justifyItems: "end" }}
        variant="text"
        scheme="default"
        onClick={() => {
          setThemeMode(themeMode === "dark" ? "light" : "dark");
        }}
      />
    </Wrapper>
  );
};

export default Header;
