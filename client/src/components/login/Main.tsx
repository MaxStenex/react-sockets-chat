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
    return <Redirect to="/chats" />;
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
        {({ getFieldProps, isValid }) => (
          <Form className="auth__form">
            <div className="auth__field">
              <DefaultInput
                {...getFieldProps("email")}
                placeholder="Email"
                type="email"
                className="auth__input"
              />
              <ErrorMessage name="email">
                {(msg) => <span className="auth__error">{msg}</span>}
              </ErrorMessage>
            </div>
            <div className="auth__field">
              <DefaultInput
                {...getFieldProps("password")}
                placeholder="Password"
                type="password"
                className="auth__input"
              />
              <ErrorMessage name="password">
                {(msg) => <span className="auth__error">{msg}</span>}
              </ErrorMessage>
            </div>
            <button
              disabled={isLoading || !isValid}
              type="submit"
              className="auth__submit"
            >
              {isLoading ? "Logging in..." : "Sign in"}
            </button>
            {loginErrorMessage && (
              <span className="auth__error auth__error--login">{loginErrorMessage}</span>
            )}
          </Form>
        )}
      </Formik>

      <div className="auth__footer">
        <h3>Don`t have an account?</h3>
        <Link to="/register">Register now!</Link>
      </div>
    </div>
  );
};

export default Main;
