import React from "react";
import SearchPanel from "../shared/SearchPanel";
import Button from "../shared/SearchPanel/Button";
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
          <Button src={AddSvg} />
          <Button src={AddSvg} />
        </Buttons>
      }
      input={
        <DefaultInput
          placeholder="Search messages..."
          className="search-panel__input"
          type="text"
        />
      }
      main={<LastMessages />}
    />
  );
};

export default ChatsPanel;
