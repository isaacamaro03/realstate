import { makeStyles } from "@material-ui/core";
import CardFilters from "./CardFilters";
import MoreFilters from "./MoreFilters";

const useStyles = makeStyles({
  root: {},
});

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
