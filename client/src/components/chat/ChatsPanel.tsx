import React from "react";
import SearchPanel from "../shared/SearchPanel";
import Button from "../shared/SearchPanel/Button";
import Buttons from "../shared/SearchPanel/Buttons";
import AddSvg from "../../images/add.svg";
import LastMessages from "./LastMessages";
import Input from "../shared/SearchPanel/Input";

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
      input={<Input placeholder="Search messages..." />}
      main={<LastMessages />}
    />
  );
};

export default ChatsPanel;
