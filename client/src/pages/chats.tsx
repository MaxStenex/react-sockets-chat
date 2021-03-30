import Sidebar from "../components/shared/Sidebar";
import ChatRoom from "../components/shared/ChatRoom";
import ChatsPanel from "../components/chats/ChatsPanel";
import Profile from "../components/shared/Profile";

const Chats = () => {
  return (
    <div className="page">
      <Sidebar />
      <ChatsPanel />
      <div className="page__main">
        <ChatRoom />
      </div>
      <Profile />
    </div>
  );
};

export default Chats;
