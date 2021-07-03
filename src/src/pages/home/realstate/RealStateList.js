import { makeStyles } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";
import { getRealStateItems } from "@services/realState";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1.5rem",
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

  const LoadingList = () => {
    const numberOfLoadingCards = 10,
      skeletonItems = [];

    for (let index = 0; index < numberOfLoadingCards; index++) {
      skeletonItems.push(
        <div>
          <Skeleton
            variant="rect"
            animation="wave"
            height={240}
            style={{ marginBottom: ".5rem" }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            width="25%"
            style={{ marginBottom: ".25rem" }}
          />
          <Skeleton variant="text" animation="wave" width="75%" />
          <Skeleton variant="text" animation="wave" width="50%" />
        </div>
      );
    }

    return skeletonItems;
  };

  return (
    <div className={classes.root}>
      {isLoading ? (
        <LoadingList />
      ) : (
        realStateItems.map((item) => <p>item.name</p>)
      )}
    </div>
  );
};

export default RealStateList;
