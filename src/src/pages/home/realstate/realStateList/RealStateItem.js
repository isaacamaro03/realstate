import { Chip, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Bathtub as BathtubIcon,
  BookmarkBorder as BookmarkBorderIcon,
  Hotel as HotelIcon,
} from "@material-ui/icons";
import HomeTypes from "@models/homeTypes";
import MarketStyles from "@models/marketStyles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    minHeight: "376px",
  },

  imgRoot: {
    position: "relative",
  },
  imgBox: {},
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "8px 8px 0 0",
  },

  content: {
    flexShrink: 0,
    padding: ".5rem 1rem 1rem",
  },
  contentMarketStyle: {
    display: "inline-flex",
    position: "absolute",
    top: 8,
    left: 8,
    padding: ".25rem .5rem",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,

    "& .MuiTypography-root": {
      fontWeight: "bold",
    },
  },
  contentPrice: {
    display: "flex",
    marginBottom: ".5rem",
    alignItems: "center",

    "& > .MuiSvgIcon-root": {
      marginLeft: "auto",
    },
  },
  contentLocation: {
    "& > span": {
      fontWeight: 500,
    },
  },
  contentStreet: {
    opacity: ".8",
    marginBottom: ".5rem",
  },
  contentInfo: {
    display: "flex",
    gap: ".25rem",
    marginTop: "1rem",

    "& > .MuiChip-root": {
      "& > .MuiSvgIcon-root": {
        marginLeft: ".5rem",
      },
    },
  },
}));

const getHomeTypeText = (homeType) => {
  switch (homeType) {
    case HomeTypes.home:
      return "Home";
    case HomeTypes.condo:
      return "Condo Apt";
    case HomeTypes.homeTown:
      return "Hometown";
    default:
      return "Unknown";
  }
};

const getMarketStyleText = (marketStyle) => {
  switch (marketStyle) {
    case MarketStyles.renting:
      return "For rent";
    case MarketStyles.selling:
      return "For sale";
    default:
      return "Unknown";
  }
};

const RealStateItem = ({ item }) => {
  const classes = useStyles();

  const baseImgSrc = `${process.env.PUBLIC_URL}/images/realstate/${item.id}`,
    numberFormatter = new Intl.NumberFormat(undefined, {});

  return (
    <Paper variant="outlined" className={classes.root}>
      <div className={classes.imgRoot}>
        <Link to={`item/${item.id}`}>
          <span className={classes.contentMarketStyle}>
            <Typography variant="caption" color="primary">
              {getMarketStyleText(item.marketStyle)}
            </Typography>
          </span>
          <div className={classes.imgBox}>
            <img
              className={classes.img}
              src={`${baseImgSrc}/0.jpg`}
              alt={item.fullName}
            />
          </div>
        </Link>
      </div>
      <div className={classes.content}>
        <div className={classes.contentPrice}>
          <Typography variant="h6">
            <b>$ {numberFormatter.format(item.price)}</b>
          </Typography>
          <BookmarkBorderIcon />
        </div>
        <div className={classes.contentLocation}>
          <Typography component="span">{item.city}, </Typography>
          <Typography component="span">{item.neighbourhood}</Typography>
        </div>
        <div className={classes.contentStreet}>
          <Typography component="span" variant="subtitle2">
            {item.street},{" "}
          </Typography>
          <Typography component="span" variant="subtitle2">
            {item.number}
          </Typography>
        </div>
        <Typography variant="subtitle2">
          <b>{getHomeTypeText(item.homeType)}</b>
        </Typography>
        <div className={classes.contentInfo}>
          <Chip label="3 bed" variant="outlined" icon={<HotelIcon />} />
          <Chip label="2 bath" variant="outlined" icon={<BathtubIcon />} />
        </div>
      </div>
    </Paper>
  );
};

export default RealStateItem;
