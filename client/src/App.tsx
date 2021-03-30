import React from "react";
import "./styles/App.scss";

import Chats from "./pages/chats";
import Login from "./pages/login";
import { Redirect, Route, Switch } from "react-router-dom";
import Register from "./pages/register";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  return (
    <Switch>
      <PrivateRoute path="/chats" component={Chats} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" render={() => <Redirect to="/chats" />} />
    </Switch>
  );
};

export default App;
