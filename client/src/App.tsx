import React from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import AddFriendPopup from "./components/AddFriend/AddFriendPopup";
import Chats from "./pages/chats";
import Friends from "./pages/friends";
import Login from "./pages/login";
import Register from "./pages/register";
import { authUserWithCookie } from "./redux/user/actions";
import "./styles/App.scss";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(authUserWithCookie());
  }, [dispatch]);

  return (
    <Switch>
      <PrivateRoute path="/chats" component={Chats} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/friends" component={Friends} />
      <Route
        exact
        path="/friends/add-friend"
        render={() => (
          <>
            <Friends /> <AddFriendPopup />
          </>
        )}
      />
      <Route path="/" render={() => <Redirect to="/chats" />} />
    </Switch>
  );
};

export default App;
