import { OptionsTypes } from "../../../types";

type Props = {
  type: OptionsTypes;
  text: string;
  href: string;
};

const Option: React.FC<Props> = ({ type, text, href }) => {
  return (
    <li
      className={`options__item ${
        type === OptionsTypes.DANGER ? "options__item--danger" : ""
      }`}
    >
      <a href={href}>{text}</a>
    </li>
  );
};

export default Option;
