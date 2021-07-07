import { makeStyles } from "@material-ui/core/styles";
import { getRealStateItems } from "@services/realState";
import { useEffect, useState } from "react";

import RealStateItem from "./RealStateItem";
import RealStateLoadingList from "./RealStateLoadingList";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1.5rem",
    marginBottom: "4rem",
  },
});

const RealStateList = () => {
  const classes = useStyles();

  const [realStateItems, setRealStateItems] = useState([]),
    [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getRealStateItems().then((items) => {
      if (isMounted) {
        setRealStateItems(items);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={classes.root}>
      {isLoading ? (
        <RealStateLoadingList />
      ) : (
        realStateItems.map((item) => <RealStateItem item={item} />)
      )}
    </div>
  );
};

export default RealStateList;
