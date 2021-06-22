import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    display: "inline-flex",
    gap: "2rem",
    margin: "0 auto",
  },
});

const NavBar = ({ className, children, ...rest }) => {
  const classes = useStyles();

  return <nav className={clsx(classes.root, className)}>{children}</nav>;
};

export default NavBar;
