import { makeStyles } from "@material-ui/core/styles";

import BrandHeader from "./BrandHeader";
import RealStateSection from "./realState/RealStateSection";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 1366,
    margin: "0 auto",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrandHeader />
      <RealStateSection />
    </div>
  );
};

export default Home;
