import React from "react";
import { Link } from "react-router-dom";
import DefaultInput from "../shared/DefaultInput";
import { ErrorMessage, Form, Formik } from "formik";
import { loginSchema } from "../../utils/validation/login";

const Main = () => {
  return (
    <div className="login">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          console.log(values);
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
            <button type="submit" className="auth__submit login__submit">
              Sign in
            </button>
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
