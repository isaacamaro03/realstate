import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

import CardFilters from "./CardFilters";
import MoreFilters from "./MoreFilters";

const useStyles = makeStyles({
  root: {},
});

const FilterSection = ({ className }) => {
  const classes = useStyles();

  return (
    <section className={clsx(classes.root, className)}>
      <CardFilters />
      <MoreFilters />
    </section>
  );
};

export default FilterSection;
