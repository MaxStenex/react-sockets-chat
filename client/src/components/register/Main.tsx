import { Formik, Form, ErrorMessage } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { registerSchema } from "../../utils/validation/register";
import DefaultInput from "../shared/DefaultInput";

const Main = () => {
  return (
    <div className="register">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ getFieldProps, isValid }) => (
          <Form className="auth__form register__form">
            <div className="auth__field register__field">
              <DefaultInput
                {...getFieldProps("firstName")}
                placeholder="Firstname"
                type="text"
                className="auth__input register__input"
              />
              <ErrorMessage name="firstName">
                {(msg) => <span className="auth__error register__error">{msg}</span>}
              </ErrorMessage>
            </div>
            <div className="auth__field register__field">
              <DefaultInput
                {...getFieldProps("lastName")}
                placeholder="Lastname"
                type="text"
                className="auth__input register__input"
              />
              <ErrorMessage name="lastName">
                {(msg) => <span className="auth__error register__error">{msg}</span>}
              </ErrorMessage>
            </div>
            <div className="auth__field register__field">
              <DefaultInput
                {...getFieldProps("email")}
                placeholder="Email"
                type="email"
                className="auth__input register__input"
              />
              <ErrorMessage name="email">
                {(msg) => <span className="auth__error register__error">{msg}</span>}
              </ErrorMessage>
            </div>
            <div className="auth__field register__field">
              <DefaultInput
                {...getFieldProps("password")}
                placeholder="Password"
                type="password"
                className="auth__input register__input"
              />
              <ErrorMessage name="password">
                {(msg) => <span className="auth__error register__error">{msg}</span>}
              </ErrorMessage>
            </div>
            <div className="auth__field register__field">
              <DefaultInput
                {...getFieldProps("confirmPassword")}
                placeholder="Confirm password"
                type="password"
                className="auth__input register__input"
              />
              <ErrorMessage name="confirmPassword">
                {(msg) => <span className="auth__error register__error">{msg}</span>}
              </ErrorMessage>
            </div>
            <button
              disabled={!isValid}
              type="submit"
              className="auth__submit register__submit"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>

      <div className="auth__footer register__footer">
        <h3>Already have an account?</h3>
        <Link to="/login">Sign in!</Link>
      </div>
    </div>
  );
};

export default Main;
