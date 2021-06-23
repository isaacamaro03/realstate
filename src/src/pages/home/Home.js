import { makeStyles } from "@material-ui/core/styles";
import BrandTitle from "./BrandTitle";

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
      <BrandTitle></BrandTitle>
    </div>
  );
};

export default Home;
