import { SearchPanelHeaderProps } from "../../../types";

const Header: React.FC<SearchPanelHeaderProps> = ({ title, buttons, input }) => {
  return (
    <header className="search-panel__header">
      <div className="search-panel__header-top">
        <h2 className="search-panel__title">{title}</h2>
        {buttons}
      </div>
      {input}
    </header>
  );
};

export default Header;
