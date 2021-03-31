type Props = {
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
}) => {
  return (
    <div className="search-panel__user-card user-card">
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
