import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Raleway", "Roboto", "sans-serif"].join(","),
  },
});

const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
