import Button from "@components/button";
import { MenuItem, makeStyles } from "@material-ui/core";
import { SwapVert as SwapVertIcon } from "@material-ui/icons";
import { useState } from "react";

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

  const orderByList = [
    {
      key: 0,
      label: "Recommended",
    },
    {
      key: 1,
      label: "Name",
    },
    {
      key: 2,
      label: "Higher price",
    },
    {
      key: 3,
      label: "Lower price",
    },
  ];
  const [orderBy, setOrderBy] = useState(orderByList[0]);

  return (
    <div className={classes.root}>
      <Button
        startIcon={<SwapVertIcon />}
        className={classes.sortButton}
        menuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        }}
      >
        Order by <b>{orderBy.label}</b>
        {orderByList.map((x) => (
          <MenuItem key={x.key} onClick={() => setOrderBy(x)}>
            {x.label}
          </MenuItem>
        ))}
      </Button>
    </div>
  );
};

export default MoreFilters;
