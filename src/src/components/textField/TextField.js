import {
  FormControl,
  InputLabel,
  OutlinedInput,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    "& > .MuiOutlinedInput-adornedStart ~ .MuiFormLabel-root:not(.MuiInputLabel-shrink)":
      {
        transform: "translate(48px, 20px) scale(1)",
      },
  },
});

const TextField = ({
  id,
  label,
  value,
  className,
  inputProps,
  onFocus,
  onBlur,
  ...rest
}) => {
  const classes = useStyles(),
    [shrink, setShrink] = useState((value || "").length !== 0);

  const handleFocus = (e) => {
    setShrink(true);
    typeof onFocus === "function" && onFocus(e);
  };
  const handleBlur = (e) => {
    setShrink(e.target.value.length !== 0);
    typeof onBlur === "function" && onBlur(e);
  };

  return (
    <FormControl
      className={clsx(classes.root, className)}
      variant="outlined"
      {...rest}
    >
      <OutlinedInput
        id={id}
        label={label}
        value={value}
        notched={shrink}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...inputProps}
      />
      <InputLabel shrink={shrink} htmlFor={id}>
        {label}
      </InputLabel>
    </FormControl>
  );
};

export default TextField;
