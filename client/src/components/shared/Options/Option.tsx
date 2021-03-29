import { OptionsTypes } from "../../../types";
import { Link } from "react-router-dom";

type Props = {
  type: OptionsTypes;
  text: string;
  href: string;
  onClick?: () => void;
};

const Option: React.FC<Props> = ({ type, text, href, onClick }) => {
  return (
    <li
      className={`options__item ${
        type === OptionsTypes.DANGER ? "options__item--danger" : ""
      }`}
      onClick={onClick}
    >
      <Link to={href}>{text}</Link>
    </li>
  );
};

export default Option;
