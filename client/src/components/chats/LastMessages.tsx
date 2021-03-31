import React from "react";
import DefaultUserImage from "../../images/defaultUserImage.png";
import UserCard from "../shared/SearchPanel/UserCard";

const LastMessages = () => {
  return (
    <ul>
      <UserCard
        imageSrc={DefaultUserImage}
        fullname="Somebody Somebody"
        textSnippet="Whats up, how are you?"
        lastMessageDate="10:32 PM"
      />
    </ul>
  );
};

export default LastMessages;
