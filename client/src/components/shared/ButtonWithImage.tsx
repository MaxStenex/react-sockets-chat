type Props = {
  src: string;
} & React.HTMLProps<HTMLButtonElement>;

const ButtonWithImage: React.FC<Props> = ({ src, className, ...props }) => {
  return (
    <button className={`button--with-image  ${className}`} {...props} type="button">
      <img src={src} alt="#" />
    </button>
  );
};

export default ButtonWithImage;
