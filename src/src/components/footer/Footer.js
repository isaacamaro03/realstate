import Logo from "@components/logo";
import { NavBar, NavItem } from "@components/navBar";
import Link from "@components/link";
import { makeStyles, Typography } from "@material-ui/core";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
} from "@material-ui/icons";

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
    textAlign: "right",
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
          <NavItem startIcon={<FacebookIcon />}>Facebook</NavItem>
          <NavItem startIcon={<TwitterIcon />}>Twitter</NavItem>
          <NavItem startIcon={<InstagramIcon />}>Instagram</NavItem>
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
          © Toronto &amp; Real State - 2021 Designed by{" "}
          <Link
            color="secondary"
            href="https://github.com/isaacamaro03"
            target="_blank"
            rel="noopener noreferrer"
          >
            Isaac Amaro
          </Link>
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
