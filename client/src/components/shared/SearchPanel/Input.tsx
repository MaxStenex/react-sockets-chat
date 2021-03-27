type Props = {
  placeholder: string;
};

const Input: React.FC<Props> = ({ placeholder }) => {
  return <input placeholder={placeholder} type="text" className="search-panel__input" />;
};

export default Input;
