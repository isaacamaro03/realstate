import { AppBar as MuiAppBar } from "@material-ui/core";
import Logo from "@components/logo";

const AppBar = () => {
  return (
    <header>
      <MuiAppBar>
        <Logo />
      </MuiAppBar>
    </header>
  );
};

export default AppBar;
