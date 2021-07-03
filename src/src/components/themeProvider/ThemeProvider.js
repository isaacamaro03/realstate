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
    MuiPaper: {
      rounded: {
        borderRadius: "8px",
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
        borderRadius: "8px",
        lineHeight: "1.25rem",
      },
    },
  },
  palette: {
    background: {
      default: "#fffbfb",
      paper: "#fffbfb",
    },
    primary: {
      main: "hsl(354, 89%, 55%)",
    },
    secondary: {
      main: "hsl(231, 88%, 58%)",
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
