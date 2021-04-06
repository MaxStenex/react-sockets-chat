import { OptionsTypes } from "../../../types";

type Props = {
  type: OptionsTypes;
  text: string;
  onClick?: () => void;
};

const Option: React.FC<Props> = ({ type, text, onClick }) => {
  return (
    <li
      className={`options__item ${
        type === OptionsTypes.DANGER ? "options__item--danger" : ""
      }`}
      onClick={onClick}
    >
      <button>{text}</button>
    </li>
  );
};

export default Option;
