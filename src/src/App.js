import Routing from "./routing";
import { CssBaseline } from "@material-ui/core";
import AppBar from "@components/appBar";
import ThemeProvider from "@components/themeProvider";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <CssBaseline />
        <div className="app">
          <AppBar />
          <Routing />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
