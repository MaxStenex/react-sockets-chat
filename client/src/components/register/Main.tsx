import { Formik, Form, ErrorMessage } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../api";
import { RegisterValuesType } from "../../types";
import { registerSchema } from "../../utils/validation/register";
import DefaultInput from "../shared/DefaultInput";

const Main = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [registerResponseMessage, setRegisterReponseMessage] = React.useState("");
  const [isSuccess, setIsSuccess] = React.useState(false);

  return (
    <div className="register">
      <Formik<RegisterValuesType & { confirmPassword: string }>
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={async (
          { firstName, lastName, email, password, confirmPassword },
          { resetForm }
        ) => {
          try {
            setIsLoading(true);
            if (password === confirmPassword) {
              const response = await registerUser({
                email,
                password,
                firstName,
                lastName,
              });
              setRegisterReponseMessage(response.data.message);
              setIsSuccess(true);
              resetForm();
            }
          } catch (error) {
            const errorMessage = error.response.data.message || "Something goes wrong :(";
            setIsSuccess(false);
            setRegisterReponseMessage(errorMessage);
          }
          setIsLoading(false);
        }}
      >
        {({ getFieldProps, isValid }) => (
          <Form className="auth__form">
            <div className="auth__field">
              <DefaultInput
                {...getFieldProps("firstName")}
                placeholder="Firstname"
                type="text"
                className="auth__input"
              />
              <ErrorMessage name="firstName">
                {(msg) => <span className="auth__error">{msg}</span>}
              </ErrorMessage>
            </div>
            <div className="auth__field">
              <DefaultInput
                {...getFieldProps("lastName")}
                placeholder="Lastname"
                type="text"
                className="auth__input"
              />
              <ErrorMessage name="lastName">
                {(msg) => <span className="auth__error">{msg}</span>}
              </ErrorMessage>
            </div>
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
            <div className="auth__field">
              <DefaultInput
                {...getFieldProps("confirmPassword")}
                placeholder="Confirm password"
                type="password"
                className="auth__input"
              />
              <ErrorMessage name="confirmPassword">
                {(msg) => <span className="auth__error">{msg}</span>}
              </ErrorMessage>
            </div>
            <button
              disabled={!isValid || isLoading}
              type="submit"
              className="auth__submit"
            >
              Register
            </button>
            {registerResponseMessage && (
              <span
                className={`${
                  isSuccess ? "auth__success" : "auth__error auth__error--register"
                }`}
              >
                {registerResponseMessage}
              </span>
            )}
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
