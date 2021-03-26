import { SearchPanelProps } from "../../../types";
import Header from "./Header";

const SearchPanel: React.FC<SearchPanelProps> = ({ title, buttons, input, main }) => {
  return (
    <div className="search-panel">
      <Header title={title} buttons={buttons} input={input} />
      <div className="search-panel__main">{main}</div>
    </div>
  );
};

export default SearchPanel;
