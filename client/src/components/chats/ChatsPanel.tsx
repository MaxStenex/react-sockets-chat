import React from "react";
import SearchPanel from "../shared/SearchPanel";
import ButtonWithImage from "../shared/ButtonWithImage";
import Buttons from "../shared/SearchPanel/Buttons";
import AddSvg from "../../images/add.svg";
import LastMessages from "./LastMessages";
import DefaultInput from "../shared/DefaultInput";

const ChatsPanel = () => {
  return (
    <SearchPanel
      title="Chats"
      buttons={
        <Buttons>
          <ButtonWithImage className="search-panel__button" src={AddSvg} />
          <ButtonWithImage className="search-panel__button" src={AddSvg} />
        </Buttons>
      }
      input={
        <DefaultInput
          placeholder="Search messages..."
          className="search-panel__input"
          type="text"
          autoFocus
        />
      }
      main={<LastMessages />}
    />
  );
};

export default ChatsPanel;
