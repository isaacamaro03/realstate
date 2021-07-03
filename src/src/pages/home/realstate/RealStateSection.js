import { makeStyles } from "@material-ui/core";

import FilterSection from "./filters/FilterSection";
import RealStateList from "./RealStateList";

const useStyles = makeStyles((theme) => ({
  root: {},

  filterSection: {
    marginBottom: "1.5rem",
  },
}));

const RealStateSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <FilterSection className={classes.filterSection} />
      <RealStateList />
    </section>
  );
};

export default RealStateSection;
