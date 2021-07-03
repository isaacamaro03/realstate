import Button from "@components/button";
import { MenuItem, makeStyles } from "@material-ui/core";
import { Hotel as HotelIcon } from "@material-ui/icons";
import { useEffect, useRef, useState } from "react";

const useStyles = makeStyles({
  root: {
    "& b": {
      fontFamily: "'Roboto', sans-serif",
      marginRight: "4px",
    },
  },
  menuItem: {
    justifyContent: "flex-end",
  },
});

const BedNumberButton = () => {
  const classes = useStyles();

  const [bedNumber, setBedNumber] = useState(0),
    bedNumbers = [
      {
        value: 0,
      },
      {
        value: 1,
      },
      {
        value: 2,
      },
      {
        value: 3,
      },
      {
        value: 4,
      },
    ];

  const buttonRef = useRef(),
    [menuWidth, setMenuWidth] = useState();

  useEffect(() => {
    setMenuWidth(buttonRef.current.offsetWidth + "px");
  }, []);

  return (
    <Button
      color="secondary"
      className={classes.root}
      startIcon={<HotelIcon />}
      ref={buttonRef}
      menuProps={{
        PaperProps: {
          style: {
            width: menuWidth,
          },
        },
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      }}
    >
      <b>{bedNumber}+</b> bed
      {bedNumbers.map((n) => (
        <MenuItem
          key={n.value}
          onClick={() => setBedNumber(n.value)}
          className={classes.menuItem}
        >
          {n.value}+
        </MenuItem>
      ))}
    </Button>
  );
};

export default BedNumberButton;
