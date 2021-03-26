import "./styles/App.scss";

import Chat from "./pages/chat";
import { Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route path="/chat" component={Chat} />
      <Route path="/" render={() => <Redirect to="/chat" />} />
    </Switch>
  );
};

export default App;
