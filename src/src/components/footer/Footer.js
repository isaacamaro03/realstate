import Logo from "@components/logo";
import { NavBar, NavItem } from "@components/navBar";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns:
      "[column-left] auto [column-center] 1fr [column-center] auto",
    gridTemplateRows: "[first-row] auto [center-row] 1fr [last-row] auto",
    padding: "2rem",

    borderTop: `1px solid ${theme.palette.divider}`,
  },

  centerContent: {
    display: "flex",
    gap: "4rem",
    alignItems: "center",
    justifyContent: "center",

    gridColumn: "column-center",
    gridRow: "center-row",
  },
  rightContent: {
    gridColumn: "column-right",
    gridRow: "center-row",
    maxWidth: 218,
  },
  bottomLeftContent: {
    gridColumn: "column-left",
    gridRow: "last-row",
    maxWidth: 172,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Logo />
      <div className={classes.centerContent}>
        <NavBar direction="column">
          <NavItem>Buy</NavItem>
          <NavItem>Rent</NavItem>
          <NavItem>Sell</NavItem>
          <NavItem>Learn more</NavItem>
        </NavBar>
        <NavBar direction="column">
          <NavItem>Facebook</NavItem>
          <NavItem>Twitter</NavItem>
          <NavItem>Instagram</NavItem>
        </NavBar>
      </div>
      <div className={classes.rightContent}>
        <Typography>
          497 St Patrick St. Toronto, ON +55 (47) 99747409
          isaac.amaro03@gmail.com
        </Typography>
      </div>
      <div className={classes.bottomLeftContent}>
        <Typography variant="caption">
          © Toronto &amp; Real State - 2021 Designed by Isaac Amaro
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
