import Popup from "../shared/Popup";
import AddFriendSvg from "../../images/add-friend.svg";
import { useHistory } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import React, { useState } from "react";
import DefaultInput from "../shared/DefaultInput";
import { requestFriendship } from "../../api";

const AddFriendPopup = () => {
  const history = useHistory();
  const closePopup = () => {
    history.push("/friends");
  };
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <Popup onClose={closePopup} headerImgSrc={AddFriendSvg} title="Add friend">
      <div className="add-friend">
        <h2 className="add-friend__title">Send invitations to friends.</h2>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={async ({ email }, { resetForm }) => {
            try {
              await requestFriendship(email.trim());
              setSuccess("Successfully requested :)");
              setError("");
              resetForm();
            } catch (error) {
              setSuccess("");
              setError(error.response.data.message);
            }
          }}
        >
          {({ getFieldProps, isValid }) => (
            <Form className="add-friend__form">
              <div className="add-friend__field">
                <label className="add-friend__label">Email address</label>
                <DefaultInput
                  autoFocus
                  {...getFieldProps("email")}
                  placeholder="Email"
                  type="email"
                  className="add-friend__input"
                />
                <ErrorMessage name="email">
                  {(msg) => <span className="add-friend__error">{msg}</span>}
                </ErrorMessage>
                {error && <span className="add-friend__error">{error}</span>}
                {success && <span className="add-friend__success">{success}</span>}
              </div>
              <button disabled={!isValid} type="submit" className="add-friend__submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Popup>
  );
};

export default AddFriendPopup;
