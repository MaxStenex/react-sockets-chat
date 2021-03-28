import "./styles/App.scss";

import Chat from "./pages/chat";
import Login from "./pages/login";
import { Redirect, Route, Switch } from "react-router-dom";
import Register from "./pages/register";

const App = () => {
  return (
    <Switch>
      <Route path="/chat" component={Chat} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" render={() => <Redirect to="/chat" />} />
    </Switch>
  );
};

export default App;
