import { useEffect, useState } from "react";
import { getUserFriendships } from "../../api";
import DefaultUserPhoto from "../../images/defaultUserImage.png";
import { FriendshipType } from "../../types";
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
  const [friendships, setFriendships] = useState<FriendshipType[]>([]);

  useEffect(() => {
    const fetchUserFriendships = async () => {
      try {
        const { data } = await getUserFriendships();

        setFriendships(
          data.map((i: any) => ({
            id: i.id,
            status: i.status,
            user: {
              id: i.user.id,
              firstName: i.user.firstName,
              lastName: i.user.lastName,
            },
          }))
        );
      } catch (error) {}
    };
    fetchUserFriendships();
  }, []);

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
      {friendships.length > 0 && (
        <ul>
          {friendships.map((f) => (
            <UserCard
              key={f.id}
              imageSrc={DefaultUserPhoto}
              fullname={`${f.user.firstName + f.user.lastName}`}
              textSnippet="Somebody short about"
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FriendList;
