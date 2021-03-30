import DefaultUserImage from "../../images/defaultUserImage.png";

const LastMessages = () => {
  return (
    <ul className="last-messages">
      <li className="last-messages__message last-message">
        <img src={DefaultUserImage} alt="#" className="last-message__photo" />
        <div className="last-message__main">
          <div className="last-message__username">Somebody Somebody</div>
          <div className="last-message__snippet">Whats up, how are you?</div>
        </div>
        <div className="last-message__info">
          <span className="last-message__count">3</span>
          <span className="last-message__date">10:32 PM</span>
        </div>
      </li>
    </ul>
  );
};

export default LastMessages;
