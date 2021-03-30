type Props = {
  src: string;
} & React.HTMLProps<HTMLButtonElement>;

const ButtonWithImage: React.FC<Props> = ({ src, className }) => {
  return (
    <button className={`button--with-image  ${className}`}>
      <img src={src} alt="#" />
    </button>
  );
};

export default ButtonWithImage;
