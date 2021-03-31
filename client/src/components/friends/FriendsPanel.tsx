import React from "react";
import ButtonWithImage from "../shared/ButtonWithImage";
import DefaultInput from "../shared/DefaultInput";
import SearchPanel from "../shared/SearchPanel";
import Buttons from "../shared/SearchPanel/Buttons";
import AddSvg from "../../images/add.svg";
import FriendList from "./FriendList";

const FriendsPanel = () => {
  return (
    <SearchPanel
      title="Friends"
      buttons={
        <Buttons>
          <ButtonWithImage src={AddSvg} />
          <ButtonWithImage src={AddSvg} />
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
