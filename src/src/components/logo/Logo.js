import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
    fontSize: "1.25rem",
    lineHeight: 1,
  },
  subTitle: {
    fontSize: "0.625rem",
  },
});

const Logo = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.title}>Toronto</Typography>
      <Typography className={classes.subTitle}>&amp; Real State</Typography>
    </div>
  );
};

export default Logo;
