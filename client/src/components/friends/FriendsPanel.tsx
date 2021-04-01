import React from "react";
import ButtonWithImage from "../shared/ButtonWithImage";
import DefaultInput from "../shared/DefaultInput";
import SearchPanel from "../shared/SearchPanel";
import Buttons from "../shared/SearchPanel/Buttons";
import AddFriendSvg from "../../images/add-friend.svg";
import FriendList from "./FriendList";
import { useHistory } from "react-router-dom";

const FriendsPanel = () => {
  const history = useHistory();
  const openAddFriendPopup = () => {
    history.push("/friends/add-friend");
  };

  return (
    <SearchPanel
      title="Friends"
      buttons={
        <Buttons>
          <ButtonWithImage onClick={openAddFriendPopup} src={AddFriendSvg} />
        </Buttons>
      }
      input={
        <DefaultInput
          placeholder="Search friends..."
          className="search-panel__input"
          type="text"
        />
      }
      main={<FriendList />}
    />
  );
};

export default FriendsPanel;
