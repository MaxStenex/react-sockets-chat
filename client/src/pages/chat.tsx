import SearchPanelButtons from "../components/chat/SearchPanelButtons";
import LastMessages from "../components/chat/LastMessages";
import SearchPanelInput from "../components/chat/SearchPanelInput";
import SearchPanel from "../components/shared/SearchPanel";
import Sidebar from "../components/shared/Sidebar";
import ChatRoom from "../components/chat/ChatRoom";

const Chat = () => {
  return (
    <div className="page">
      <Sidebar />
      <SearchPanel
        title="Chats"
        buttons={<SearchPanelButtons />}
        input={<SearchPanelInput />}
        main={<LastMessages />}
      />
      <div className="page__main">
        <ChatRoom />
      </div>
    </div>
  );
};

export default Chat;
