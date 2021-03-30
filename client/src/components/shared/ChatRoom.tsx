import DefaultUserImage from "../../images/defaultUserImage.png";
import AddSvg from "../../images/add.svg";
import SendMessageSvg from "../../images/send.svg";
import DefaultInput from "../shared/DefaultInput";
import ButtonWithImage from "../shared/ButtonWithImage";

const ChatRoom = () => {
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
          <li className="chat-room__message chat-message chat-message--self">
            <div className="chat-message__header">
              <img src={DefaultUserImage} alt="#" className="chat-message__user-photo" />
              <div className="chat-message__user-info">
                <div className="chat-message__username">Somebody Somebody</div>
                <div className="chat-message__date">05:20 am</div>
              </div>
            </div>
            <div className="chat-message__text">Hello how are you?</div>
          </li>
          <li className="chat-room__message chat-message ">
            <div className="chat-message__header">
              <img src={DefaultUserImage} alt="#" className="chat-message__user-photo" />
              <div className="chat-message__user-info">
                <div className="chat-message__username">Somebody Somebody</div>
                <div className="chat-message__date">05:20 am</div>
              </div>
            </div>
            <div className="chat-message__text">Hello how are you?</div>
          </li>
        </ul>
      </div>
      <footer className="chat-room__footer">
        <DefaultInput
          placeholder="Write a message..."
          type="text"
          className="chat-room__input"
        />
        <button className="chat-room__send-message">
          <img src={SendMessageSvg} alt="send" />
        </button>
      </footer>
    </div>
  );
};

export default ChatRoom;
