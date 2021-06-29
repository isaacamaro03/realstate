import Home from "@pages/home";
import Item from "@pages/item";
import {
  Redirect,
  Route,
  HashRouter as Router,
  Switch,
} from "react-router-dom";

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
