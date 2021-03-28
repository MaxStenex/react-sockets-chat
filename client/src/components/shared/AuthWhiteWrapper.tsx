import React from "react";
import LogoSvg from "../../images/logo.svg";

type Props = {
  title: string;
};

const AuthWhiteWrapper: React.FC<Props> = ({ title, children }) => {
  return (
    <section className="auth">
      <img src={LogoSvg} alt="#" className="auth__logo" />
      <h2 className="auth__title">{title}</h2>
      {children}
    </section>
  );
};

export default AuthWhiteWrapper;
