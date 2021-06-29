import clsx from "clsx";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
});

const Button = ({ children, className, ...rest }) => {
  const classes = useStyles();

  return (
    <MuiButton
      variant="outlined"
      className={clsx(classes.root, className)}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
