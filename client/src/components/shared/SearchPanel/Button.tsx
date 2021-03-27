type Props = {
  src: string;
};

const Button: React.FC<Props> = ({ src }) => {
  return (
    <button className="search-panel__button">
      <img src={src} alt="add" />
    </button>
  );
};

export default Button;
