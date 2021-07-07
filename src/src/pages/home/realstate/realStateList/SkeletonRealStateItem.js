import { Skeleton } from "@material-ui/lab";

const SkeletonRealStateItem = () => {
  return (
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
};

export default SkeletonRealStateItem;
