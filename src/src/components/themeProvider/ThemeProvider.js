import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          color: "hsl(353, 11%, 31%)",
        },
      },
    },
  },
  palette: {
    background: "hsl(354, 100%, 98%)",
    primary: {
      main: "hsl(354, 89%, 55%)",
    },
  },
  typography: {
    fontFamily: ["Raleway", "Roboto", "sans-serif"].join(","),
  },
});

const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
