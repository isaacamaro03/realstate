import { Typography, makeStyles, Link } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const NavItem = ({ className, children, ...rest }) => {
  const classes = useStyles();

  const CustomLink = ({ children, ...rest }) => (
    <Link color="inherit" underline="none" {...rest}>
      {children}
    </Link>
  );

  return (
    <Typography
      variant="body1"
      className={clsx(classes.root, className)}
      component={CustomLink}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default NavItem;
