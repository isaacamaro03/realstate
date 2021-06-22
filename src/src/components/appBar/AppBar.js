import { makeStyles } from "@material-ui/core/styles";
import Logo from "@components/logo";
import { NavBar, NavItem } from "@components/navBar";
import Button from "@components/button";

const useStyles = makeStyles({
  appBar: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    padding: ".5rem",
  },
  innerAppBar: {
    alignItems: "center",
    display: "flex",
    maxWidth: "1366px",
    flex: 1,
    margin: "0 1rem",
  },

  nav: {},
});

const AppBar = () => {
  const classes = useStyles();

  return (
    <header className={classes.appBar} variant="outlined">
      <div className={classes.innerAppBar}>
        <Logo />
        <NavBar>
          <NavItem>Buy</NavItem>
          <NavItem>Rent</NavItem>
          <NavItem>Sell</NavItem>
          <NavItem>Learn more</NavItem>
        </NavBar>
        <Button>Favoritos</Button>
      </div>
    </header>
  );
};

export default AppBar;
