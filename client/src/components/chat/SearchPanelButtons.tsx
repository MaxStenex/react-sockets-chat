import AddSvg from "../../images/add.svg";

const SearchPanelButtons = () => {
  return (
    <div className="search-panel__actions">
      <button className="search-panel__action-button">
        <img src={AddSvg} alt="add" />
      </button>
      <button className="search-panel__action-button">
        <img src={AddSvg} alt="add" />
      </button>
    </div>
  );
};

export default SearchPanelButtons;
