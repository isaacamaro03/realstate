import Button from "@components/button";
import Logo from "@components/logo";
import { NavBar, NavItem } from "@components/navBar";
import { makeStyles } from "@material-ui/core/styles";
import Bookmark from "@material-ui/icons/Bookmark";

const useStyles = makeStyles({
  root: {
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

  nav: {
    margin: "0 auto",

    "& .NavItem-root": {
      fontWeight: "bold",
    },
  },
});

const AppBar = () => {
  const classes = useStyles();

  return (
    <header className={classes.root} variant="outlined">
      <div className={classes.innerAppBar}>
        <Logo />
        <NavBar className={classes.nav}>
          <NavItem>Buy</NavItem>
          <NavItem>Rent</NavItem>
          <NavItem>Sell</NavItem>
          <NavItem>Learn more</NavItem>
        </NavBar>
        <Button endIcon={<Bookmark />}>Favorites</Button>
      </div>
    </header>
  );
};

export default AppBar;
