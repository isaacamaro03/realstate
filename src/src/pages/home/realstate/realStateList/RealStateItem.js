import { Chip, IconButton, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Bathtub as BathtubIcon,
  BookmarkBorder as BookmarkBorderIcon,
  KingBed as KingBedIcon,
} from "@material-ui/icons";
import HomeTypes from "@models/homeTypes";
import MarketStyles from "@models/marketStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    minHeight: "376px",
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
      <div className={classes.imgBox}>
        <img
          className={classes.img}
          src={`${baseImgSrc}/0.jpg`}
          alt={item.fullName}
        />
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
        <Typography variant="subtitle2" color="secondary">
          <b>{getMarketStyleText(item.marketStyle)}</b>
        </Typography>
        <div className={classes.contentInfo}>
          <Chip label="3 bed" variant="outlined" icon={<KingBedIcon />} />
          <Chip label="2 bath" variant="outlined" icon={<BathtubIcon />} />
        </div>
      </div>
    </Paper>
  );
};

export default RealStateItem;
