import { useEffect, useRef } from "react";
import CloseSvg from "../../images/close.svg";

type Props = {
  headerImgSrc: string;
  title: string;
  onClose: () => void;
};

const Popup: React.FC<Props> = ({ headerImgSrc, title, children, onClose }) => {
  const popupWrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const closePopup = (evt: Event) => {
      if (!popupWrapperRef.current?.contains(evt.target as any)) {
        onClose();
      }
    };
    window.addEventListener("click", closePopup);
    return () => {
      window.removeEventListener("click", closePopup);
    };
  }, [onClose]);

  return (
    <div className="popup">
      <div className="popup__bg"></div>
      <div ref={popupWrapperRef} className="popup__wrapper">
        <div className="popup__header">
          <h2 className="popup__title">
            <img src={headerImgSrc} alt="#" />
            <span>{title}</span>
          </h2>
          <button onClick={onClose} className="popup__close">
            <img src={CloseSvg} alt="#" />
          </button>
        </div>
        <div className="popup__main">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
