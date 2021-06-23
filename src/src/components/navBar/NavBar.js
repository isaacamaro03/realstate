import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    display: "inline-flex",
    gap: "2rem",

    "&$directionColumn": {
      flexDirection: "column",
      gap: ".5rem",
    },
  },
  directionColumn: {},
});

const NavBar = ({ className, children, direction, ...rest }) => {
  const classes = useStyles(),
    classList = [classes.root, className];

  if (direction == "column") {
    classList.push(classes.directionColumn);
  }

  return <nav className={clsx(classList)}>{children}</nav>;
};

export default NavBar;
