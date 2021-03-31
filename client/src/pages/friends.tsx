import React from "react";
import FriendsPanel from "../components/friends/FriendsPanel";
import ChatRoom from "../components/shared/ChatRoom";
import Profile from "../components/shared/Profile";
import Sidebar from "../components/shared/Sidebar";

const Friends = () => {
  return (
    <div className="page">
      <Sidebar />
      <FriendsPanel />
      <div className="page__main">
        <ChatRoom />
      </div>
      <Profile />
    </div>
  );
};

export default Friends;
