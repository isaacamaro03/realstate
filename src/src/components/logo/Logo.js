import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.25rem",
    lineHeight: 1,
    color: theme.palette.primary.main,
  },
  subTitle: {
    fontSize: "0.625rem",
    color: theme.palette.primary.main,
  },
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Toronto</Typography>
      <Typography className={classes.subTitle}>&amp; Real State</Typography>
    </div>
  );
};

export default Logo;
