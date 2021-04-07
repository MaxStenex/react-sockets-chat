import React from "react";
import AddFriendPopup from "../components/add-friend/AddFriendPopup";
import FriendsPanel from "../components/friends/FriendsPanel";
import ChatRoom from "../components/shared/ChatRoom";
import Profile from "../components/shared/Profile";
import Sidebar from "../components/shared/Sidebar";
import PrivateRoute from "../utils/PrivateRoute";

const Friends = () => {
  return (
    <div className="page">
      <Sidebar />
      <FriendsPanel />
      <div className="page__main">
        <ChatRoom />
      </div>
      <Profile />
      <PrivateRoute
        exact
        path="/friends/add-friend"
        component={() => <AddFriendPopup />}
      />
    </div>
  );
};

export default Friends;
