import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Home from "@pages/home";
import Item from "@pages/item";

const Routing = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/item/:id">
            <Item />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route>
            {/* Fallback route. */}
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routing;
