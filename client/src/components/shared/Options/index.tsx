import { useEffect, useRef } from "react";

type Props = {
  closeOptions: () => void;
};

const Options: React.FC<Props> = ({ children, closeOptions }) => {
  const optionsListRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const closeOptionsHandler = (evt: any) => {
      if (!optionsListRef.current) {
        return;
      }
      if (!evt.path.includes(optionsListRef.current)) {
        closeOptions();
      }
    };
    window.addEventListener("click", closeOptionsHandler);
    return () => {
      window.removeEventListener("click", closeOptionsHandler);
    };
  }, [closeOptions]);

  return (
    <ul ref={optionsListRef} className="options">
      {children}
    </ul>
  );
};

export default Options;
