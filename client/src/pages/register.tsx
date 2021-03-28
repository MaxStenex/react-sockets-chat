import AuthWhiteWrapper from "../components/shared/AuthWhiteWrapper";
import Main from "../components/register/Main";

const Register = () => {
  return (
    <AuthWhiteWrapper title="Create account">
      <Main />
    </AuthWhiteWrapper>
  );
};

export default Register;
