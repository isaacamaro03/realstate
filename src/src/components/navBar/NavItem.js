import { Typography, makeStyles } from "@material-ui/core";
import Link from "@components/link";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    gap: ".5rem",
    cursor: "pointer",
  },
}));

const NavItem = ({ className, children, startIcon, ...rest }) => {
  const classes = useStyles();

  return (
    <Typography
      variant="body1"
      className={clsx("NavItem-root", classes.root, className)}
      component={Link}
      {...rest}
    >
      {startIcon}
      {children}
    </Typography>
  );
};

export default NavItem;
