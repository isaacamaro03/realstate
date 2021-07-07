import HomeTypes from "models/homeTypes";
import MarketStyles from "models/marketStyles";

const getRealStateItems = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            id: 0,
            price: 198000,
            city: "Toronto",
            neighbourhood: "High Park-Swansea",
            street: "Old Mill Drive",
            number: "1116 - 1",
            homeType: HomeTypes.condo,
            marketStyle: MarketStyles.renting,
            imageCount: 23,
            fullName: "1116 - 1, High Park-Swansea. Toronto, Old Mill Drive",
          },
          {
            id: 0,
            price: 198000,
            city: "Toronto",
            neighbourhood: "High Park-Swansea",
            street: "Old Mill Drive",
            number: "1116 - 1",
            homeType: HomeTypes.condo,
            marketStyle: MarketStyles.renting,
            imageCount: 23,
            fullName: "1116 - 1, High Park-Swansea. Toronto, Old Mill Drive",
          },
          {
            id: 0,
            price: 198000,
            city: "Toronto",
            neighbourhood: "High Park-Swansea",
            street: "Old Mill Drive",
            number: "1116 - 1",
            homeType: HomeTypes.condo,
            marketStyle: MarketStyles.renting,
            imageCount: 23,
            fullName: "1116 - 1, High Park-Swansea. Toronto, Old Mill Drive",
          },
          {
            id: 0,
            price: 198000,
            city: "Toronto",
            neighbourhood: "High Park-Swansea",
            street: "Old Mill Drive",
            number: "1116 - 1",
            homeType: HomeTypes.condo,
            marketStyle: MarketStyles.renting,
            imageCount: 23,
            fullName: "1116 - 1, High Park-Swansea. Toronto, Old Mill Drive",
          },
          {
            id: 0,
            price: 198000,
            city: "Toronto",
            neighbourhood: "High Park-Swansea",
            street: "Old Mill Drive",
            number: "1116 - 1",
            homeType: HomeTypes.condo,
            marketStyle: MarketStyles.renting,
            imageCount: 23,
            fullName: "1116 - 1, High Park-Swansea. Toronto, Old Mill Drive",
          },
          {
            id: 0,
            price: 198000,
            city: "Toronto",
            neighbourhood: "High Park-Swansea",
            street: "Old Mill Drive",
            number: "1116 - 1",
            homeType: HomeTypes.condo,
            marketStyle: MarketStyles.renting,
            imageCount: 23,
            fullName: "1116 - 1, High Park-Swansea. Toronto, Old Mill Drive",
          },
        ]),
      1000
    );
  });
};

export { getRealStateItems };
