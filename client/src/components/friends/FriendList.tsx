import DefaultUserPhoto from "../../images/defaultUserImage.png";
import UserCard from "../shared/SearchPanel/UserCard";

enum FriendListFilters {
  ALL = "All",
  REQUESSTS = "Requests",
}

const filters = [
  {
    id: 1,
    type: FriendListFilters.ALL,
    isActive: true,
  },
  {
    id: 2,
    type: FriendListFilters.REQUESSTS,
    isActive: false,
  },
];

const FriendList = () => {
  return (
    <div className="friend-list">
      <div className="friend-list__filters">
        {filters.map((f) => (
          <button
            key={f.id}
            className={`friend-list__filter-btn ${
              f.isActive && "friend-list__filter-btn--active"
            }`}
          >
            {f.type}
          </button>
        ))}
      </div>
      <ul>
        <UserCard
          imageSrc={DefaultUserPhoto}
          fullname="Somebody somebody"
          textSnippet="Somebody short about"
        />
      </ul>
    </div>
  );
};

export default FriendList;
