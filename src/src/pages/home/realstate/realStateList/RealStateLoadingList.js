import SkeletonRealStateItem from "./SkeletonRealStateItem";

const RealStateLoadingList = () => {
  const numberOfLoadingCards = 8,
    skeletonItems = [];

  for (let index = 0; index < numberOfLoadingCards; index++) {
    skeletonItems.push(<SkeletonRealStateItem key={index} />);
  }

  return skeletonItems;
};

export default RealStateLoadingList;
