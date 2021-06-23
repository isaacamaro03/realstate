import { makeStyles } from "@material-ui/core/styles";
import BrandHeader from "./BrandHeader";

const useStyles = makeStyles({
  root: {
    margin: "0 auto",
    maxWidth: 1366,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrandHeader></BrandHeader>
    </div>
  );
};

export default Home;
