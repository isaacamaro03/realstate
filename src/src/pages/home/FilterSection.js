import { makeStyles, Paper, InputAdornment, MenuItem } from "@material-ui/core";
import TextField from "@components/textField";
import Select from "@components/select";
import { Search as SearchIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {},

  filterBox: {
    display: "flex",
    padding: "1rem",
    gap: "1rem",
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

const FilterSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Paper elevation={3} className={classes.filterBox}>
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
          label="Type of property"
          value=""
          className={classes.selectField}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Select
          labelId="region-select"
          label="Region"
          value=""
          className={classes.selectField}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <div className={classes.valueRangeGroup}>
          <TextField id="search-field-2" label="$ 0,00" />
          <TextField id="search-field-3" label="$ 0,00" />
        </div>
      </Paper>
    </section>
  );
};

export default FilterSection;
