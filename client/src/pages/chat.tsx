import Sidebar from "../components/shared/Sidebar";
import ChatRoom from "../components/chat/ChatRoom";
import ChatsPanel from "../components/chat/ChatsPanel";

const Chat = () => {
  return (
    <div className="page">
      <Sidebar />
      <ChatsPanel />
      <div className="page__main">
        <ChatRoom />
      </div>
    </div>
  );
};

export default Chat;
