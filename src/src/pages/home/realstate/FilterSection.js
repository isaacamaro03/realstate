import { makeStyles } from "@material-ui/core";
import CardFilters from "./CardFilters";
import MoreFilters from "./MoreFilters";

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
      <CardFilters />
      <MoreFilters />
    </section>
  );
};

export default FilterSection;
