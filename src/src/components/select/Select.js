import {
  Select as MuiSelect,
  FormControl,
  InputLabel,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {},
});

const Select = ({
  labelId,
  label,
  children,
  className,
  inputProps,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <FormControl variant="outlined">
      <InputLabel id={labelId}>{label}</InputLabel>
      <MuiSelect
        inputProps={inputProps}
        labelId={labelId}
        label={label}
        className={clsx(classes.root, className)}
        {...rest}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {children}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
