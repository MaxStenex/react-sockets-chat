import DefaultUserPhoto from "../../images/defaultUserImage.png";
import UserCard from "../shared/SearchPanel/UserCard";

const FriendList = () => {
  return (
    <ul>
      <UserCard
        imageSrc={DefaultUserPhoto}
        fullname="Somebody somebody"
        textSnippet="Somebody short about"
      />
    </ul>
  );
};

export default FriendList;
