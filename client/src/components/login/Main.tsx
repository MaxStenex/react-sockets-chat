import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { RootStateType } from "../../redux/rootReducer";
import { fetchUser } from "../../redux/user/actions";
import { LoginValuesType } from "../../types";
import { loginSchema } from "../../utils/validation/login";
import DefaultInput from "../shared/DefaultInput";

const Main = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootStateType) => state.user.isLoading);
  const loginErrorMessage = useSelector(
    (state: RootStateType) => state.user.errorMessage
  );

  const userId = useSelector((state: RootStateType) => state.user.id);
  if (userId) {
    return <Redirect to="/chat" />;
  }

  return (
    <div className="login">
      <Formik<LoginValuesType>
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={({ email, password }) => {
          dispatch(fetchUser({ email, password }));
        }}
      >
        {({ getFieldProps }) => (
          <Form className="auth__form login__form">
            <div className="auth__field login__field">
              <DefaultInput
                {...getFieldProps("email")}
                placeholder="Email"
                type="email"
                className="auth__input login__input"
              />
              <ErrorMessage name="email">
                {(msg) => <span className="auth__error login__error">{msg}</span>}
              </ErrorMessage>
            </div>
            <div className="auth__field login__field">
              <DefaultInput
                {...getFieldProps("password")}
                placeholder="Password"
                type="password"
                className="auth__input login__input"
              />
              <ErrorMessage name="password">
                {(msg) => <span className="auth__error login__error">{msg}</span>}
              </ErrorMessage>
            </div>
            <div className="login__remember-me">
              <input type="checkbox" id="remember-me__input" />
              <label htmlFor="remember-me__input">Remember me</label>
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="auth__submit login__submit"
            >
              {isLoading ? "Logging in..." : "Sign in"}
            </button>
            {loginErrorMessage && (
              <span className="auth__error auth__error--login">{loginErrorMessage}</span>
            )}
          </Form>
        )}
      </Formik>

      <div className="auth__footer login__footer">
        <h3>Don`t have an account?</h3>
        <Link to="/register">Register now!</Link>
      </div>
    </div>
  );
};

export default Main;
