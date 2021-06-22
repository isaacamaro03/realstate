import clsx from "clsx";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    textTransform: "none",
  },
});

const Button = ({ children, className, ...rest }) => {
  const classes = useStyles();

  return (
    <MuiButton
      color="primary"
      variant="outlined"
      {...rest}
      className={clsx(classes.root, className)}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
