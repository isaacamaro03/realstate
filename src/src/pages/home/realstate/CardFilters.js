import { makeStyles, Paper, InputAdornment, MenuItem } from "@material-ui/core";
import TextField from "@components/textField";
import Select from "@components/select";
import { Search as SearchIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "1rem",
    gap: "1rem",
    marginBottom: "1rem",
  },
  searchField: {
    flex: 1,
  },
  selectField: {
    flexShrink: 0,
    minWidth: 210,
  },

  valueRangeGroup: {
    display: "inline-flex",
    gap: ".5rem",
  },
}));

const CardFilters = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <TextField
        id="search-field"
        label="Search for apartaments, houses, cities..."
        className={classes.searchField}
        inputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Select
        labelId="property-type-select"
        label="Type"
        value=""
        className={classes.selectField}
      >
        <MenuItem value={0}>House</MenuItem>
        <MenuItem value={1}>Condo</MenuItem>
        <MenuItem value={2}>Townhouse</MenuItem>
      </Select>
      <Select
        labelId="purchase-mode-select"
        label="For rent"
        value=""
        className={classes.selectField}
      >
        <MenuItem value={0}>For rent</MenuItem>
        <MenuItem value={1}>For sale</MenuItem>
      </Select>
      <div className={classes.valueRangeGroup}>
        <TextField
          id="value-from-numeric"
          inputProps={{
            placeholder: "0,00",
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          id="value-to-numeric"
          inputProps={{
            placeholder: "0,00",
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </div>
    </Paper>
  );
};

export default CardFilters;
