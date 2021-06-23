import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "4.5rem 0 4.5rem 2rem",
  },
  brandHeader: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  brandDescription: {
    maxWidth: 436,
    fontFamily: "Roboto, sans-serif",
  },
});

const BrandHeader = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <main className={classes.main}>
        <Typography variant="h3" className={classes.brandHeader}>
          Find your property now
        </Typography>
        <Typography variant="h6" className={classes.brandDescription}>
          Easily search for hundreds of properties in the Great Toronto Area and
          book your visit with the announcer.
        </Typography>
      </main>
    </section>
  );
};

export default BrandHeader;
