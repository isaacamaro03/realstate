import Button from "@components/button";
import { makeStyles } from "@material-ui/core";
import { SwapVert as SwapVertIcon } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: "1rem",
  },

  sortButton: {
    marginLeft: "auto",

    "& b": {
      marginLeft: "0.25rem",
    },
  },
});

const MoreFilters = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button startIcon={<SwapVertIcon />} className={classes.sortButton}>
        Order by <b>Recommended</b>
      </Button>
    </div>
  );
};

export default MoreFilters;
