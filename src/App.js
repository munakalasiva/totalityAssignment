import { Route, Switch } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import PropertyListings from "./components/PropertyListings";

import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={PropertyListings} />
  </Switch>
);

export default App;
