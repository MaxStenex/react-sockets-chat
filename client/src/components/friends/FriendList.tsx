import { useEffect, useState } from "react";
import { getUserFriendships } from "../../api";
import DefaultUserPhoto from "../../images/defaultUserImage.png";
import { FriendshipType, FriendshipTypes } from "../../types";
import UserCard from "../shared/SearchPanel/UserCard";

enum FriendFilters {
  ALL = "All",
  REQUESTS = "Requests",
}

const filters = [
  {
    id: 1,
    type: FriendFilters.ALL,
    text: "All",
  },
  {
    id: 2,
    type: FriendFilters.REQUESTS,
    text: "Requests",
  },
];

const FriendList = () => {
  const [friendships, setFriendships] = useState<FriendshipType[]>([]);
  const [filteredFriendships, setFilteredFriendships] = useState<FriendshipType[]>([]);
  const [filter, setFilter] = useState(FriendFilters.ALL);

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
  useEffect(() => {
    setFilteredFriendships(
      friendships.filter((f) => {
        if (filter === FriendFilters.REQUESTS) {
          return f.status === FriendshipTypes.REQUESTED;
        }
        return f;
      })
    );
  }, [filter, friendships]);

  return (
    <div className="friend-list">
      <div className="friend-list__filters">
        {filters.map((f) => (
          <button
            key={f.id}
            className={`friend-list__filter-btn ${
              f.type === filter && "friend-list__filter-btn--active"
            }`}
            onClick={() => setFilter(f.type)}
          >
            {f.text}
          </button>
        ))}
      </div>
      {friendships.length > 0 && (
        <ul>
          {filteredFriendships.map((f) => (
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
