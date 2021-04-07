import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AddFriendSvg from "../../images/add-friend.svg";
import ButtonWithImage from "../shared/ButtonWithImage";
import DefaultInput from "../shared/DefaultInput";
import SearchPanel from "../shared/SearchPanel";
import Buttons from "../shared/SearchPanel/Buttons";
import FriendList from "./FriendList";

const FriendsPanel = () => {
  const history = useHistory();
  const openAddFriendPopup = () => {
    history.push("/friends/add-friend");
  };
  const [friendNameFilter, setFriendNameFilter] = useState("");

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
          autoFocus
          value={friendNameFilter}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFriendNameFilter(e.target.value)
          }
        />
      }
      main={<FriendList friendNameFilter={friendNameFilter} />}
    />
  );
};

export default FriendsPanel;
