import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import io, { Socket } from "socket.io-client";
import { getMessages } from "../../api";
import AddSvg from "../../images/add.svg";
import DefaultUserImage from "../../images/defaultUserImage.png";
import SendMessageSvg from "../../images/send.svg";
import { RootStateType } from "../../redux/rootReducer";
import { MessageType } from "../../types";
import ButtonWithImage from "../shared/ButtonWithImage";
import DefaultInput from "../shared/DefaultInput";

const ChatRoom = () => {
  const socketRef = useRef<null | typeof Socket>(null);

  const authedUser = useSelector((state: RootStateType) => state.user);
  const [messageText, setMessageText] = useState("");
  const chatRoomId = useSelector((state: RootStateType) => state.chatRoom.roomUserId);
  const [messages, setMessages] = useState<MessageType[]>([]);

  const sendMessage = () => {
    if (!chatRoomId) {
      return;
    }

    socketRef.current?.emit("messageFromUser", {
      text: messageText,
      senderId: authedUser.id,
      roomUserId: chatRoomId,
    });
    setMessageText("");
  };

  useEffect(() => {
    socketRef.current = io("http://localhost:4000/messages");

    socketRef.current.on("newMessage", (message: MessageType) => {
      setMessages((p) => [...p, message]);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (chatRoomId) {
      const fetchAndSetMessages = async () => {
        try {
          const { data }: { data: Array<any> } = await getMessages(chatRoomId);
          setMessages(
            data.map<MessageType>((m) => ({
              id: m.id,
              accepterId: m.accepterId,
              senderId: m.senderId,
              createdAt: m.createdAt,
              text: m.text,
            }))
          );
        } catch (error) {
          console.log(error);
        }
      };

      fetchAndSetMessages();
      socketRef.current?.emit("joinRoom", chatRoomId);
    }

    return () => {
      if (chatRoomId) {
        socketRef.current?.emit("leaveRoom", chatRoomId);
      }
    };
  }, [chatRoomId]);

  return (
    <div className="chat-room">
      <div className="chat-room__wrapper">
        <header className="chat-room__header">
          <div className="chat-room__user-info">
            <img src={DefaultUserImage} alt="#" className="chat-room__user-photo" />
            <div className="chat-room__username">Somebody Somebody</div>
          </div>
          <div className="chat-room__actions">
            <ButtonWithImage src={AddSvg} className="chat-room__action" />
          </div>
        </header>
        <ul className="chat-room__messages">
          {messages.map((m) => (
            <li
              key={m.id}
              className={`chat-room__message chat-message ${
                m.senderId === authedUser.id ? " chat-message--self" : " "
              }`}
            >
              <div className="chat-message__header">
                <img
                  src={DefaultUserImage}
                  alt="#"
                  className="chat-message__user-photo"
                />
                <div className="chat-message__user-info">
                  <div className="chat-message__username">{authedUser.firstName}</div>
                  <div className="chat-message__date">
                    {new Date(m.createdAt).toUTCString()}
                  </div>
                </div>
              </div>
              <div className="chat-message__text">{m.text}</div>
            </li>
          ))}
        </ul>
      </div>
      <footer className="chat-room__footer">
        <DefaultInput
          placeholder="Write a message..."
          type="text"
          className="chat-room__input"
          value={messageText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMessageText(e.target.value)
          }
        />
        <button onClick={sendMessage} className="chat-room__send-message">
          <img src={SendMessageSvg} alt="send" />
        </button>
      </footer>
    </div>
  );
};

export default ChatRoom;
