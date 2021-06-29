import AppBar from "@components/appBar";
import Footer from "@components/footer";
import ThemeProvider from "@components/themeProvider";
import { CssBaseline, makeStyles } from "@material-ui/core";

import Routing from "./routing";

const useStyles = makeStyles({
  app: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider>
        <CssBaseline />
        <div className={classes.app}>
          <AppBar />
          <Routing />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
