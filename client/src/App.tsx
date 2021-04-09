import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import AddFriendPopup from "./components/add-friend/AddFriendPopup";
import ChatsPanel from "./components/chats/ChatsPanel";
import FriendsPanel from "./components/friends/FriendsPanel";
import ChatRoom from "./components/shared/ChatRoom";
import Profile from "./components/shared/Profile";
import Sidebar from "./components/shared/Sidebar";
import Login from "./pages/login";
import Register from "./pages/register";
import { RootStateType } from "./redux/rootReducer";
import { authUserWithCookie } from "./redux/user/actions";
import "./styles/App.scss";

const App = () => {
  const dispatch = useDispatch();
  const authedUserId = useSelector((state: RootStateType) => state.user.id);
  React.useEffect(() => {
    dispatch(authUserWithCookie());
  }, [dispatch]);

  if (!authedUserId) {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Login} />
      </Switch>
    );
  }

  return (
    <div className="page">
      <Switch>
        <Route path={["/chats", "/friends"]} component={Sidebar} />
      </Switch>

      <Switch>
        <Route path="/chats" component={ChatsPanel} />
        <Route path="/friends" component={FriendsPanel} />
      </Switch>

      <Switch>
        <Route
          path={["/chats", "/friends"]}
          component={() => (
            <div className="page__main">
              <ChatRoom />
            </div>
          )}
        />
      </Switch>

      <Route exact path="/friends/add-friend" component={() => <AddFriendPopup />} />
      <Route path={["/chats", "/friends"]} component={Profile} />
      <Route path="/" component={() => <Redirect to="/chats" />} />
    </div>
  );
};

export default App;
