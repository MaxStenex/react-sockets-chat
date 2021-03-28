type Props = {} & React.HTMLProps<HTMLInputElement>;

const DefaultInput: React.FC<Props> = ({ placeholder, className, type, ...props }) => {
  return (
    <input
      {...props}
      placeholder={placeholder}
      type={type}
      className={`default-input , ${className}`}
    />
  );
};

export default DefaultInput;
