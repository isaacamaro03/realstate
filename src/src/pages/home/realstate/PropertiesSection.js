import { makeStyles } from "@material-ui/core";
import FilterSection from "./FilterSection";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const PropertiesSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <FilterSection />
    </section>
  );
};

export default PropertiesSection;
