import Popup from "../shared/Popup";
import AddFriendSvg from "../../images/add-friend.svg";
import { useHistory } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import React from "react";
import DefaultInput from "../shared/DefaultInput";

const AddFriendPopup = () => {
  const history = useHistory();
  const closePopup = () => {
    history.push("/friends");
  };

  return (
    <Popup onClose={closePopup} headerImgSrc={AddFriendSvg} title="Add friend">
      <div className="add-friend">
        <h2 className="add-friend__title">Send invitations to friends.</h2>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={({ email }) => {
            console.log(email);
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
                  {(msg) => <span className="">{msg}</span>}
                </ErrorMessage>
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
