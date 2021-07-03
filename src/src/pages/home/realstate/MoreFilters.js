import { makeStyles } from "@material-ui/core";

import BedNumberButton from "./BedNumberButton";
import OrderByButton from "./OrderByButton";

const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: "1rem",
  },
  sortButton: {
    marginLeft: "auto",
  },
});

const MoreFilters = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BedNumberButton />
      <OrderByButton className={classes.sortButton} />
    </div>
  );
};

export default MoreFilters;
