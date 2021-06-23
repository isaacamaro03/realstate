import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const PropertiesSection = () => {
  const classes = useStyles();

  return <section className={classes.root}></section>;
};

export default PropertiesSection;
