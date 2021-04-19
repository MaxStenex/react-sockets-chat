import { useDispatch, useSelector } from "react-redux";
import { joinRoom } from "../../../redux/chatRoom/actions";
import { RootStateType } from "../../../redux/rootReducer";

type Props = {
  userId: number;
  imageSrc: string;
  fullname: string;
  textSnippet: string;
  lastMessageDate?: string;
};

const UserCard: React.FC<Props> = ({
  imageSrc,
  fullname,
  textSnippet,
  lastMessageDate,
  userId,
}) => {
  const chattingRoomUserId = useSelector(
    (state: RootStateType) => state.chatRoom.roomUserId
  );
  const dispatch = useDispatch();

  const onCardClick = () => {
    dispatch(joinRoom(userId));
  };

  return (
    <div
      className={`search-panel__user-card user-card ${
        userId === chattingRoomUserId ? " user-card--active" : " "
      }`}
      onClick={onCardClick}
    >
      <img src={imageSrc} alt="#" className="user-card__photo" />
      <div className="user-card__main">
        <div className="user-card__username">{fullname}</div>
        <div className="user-card__snippet">{textSnippet}</div>
      </div>
      {lastMessageDate && <div className="user-card__date">{lastMessageDate}</div>}
    </div>
  );
};

export default UserCard;
