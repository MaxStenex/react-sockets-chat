import CloseSvg from "../../images/close.svg";
import DefaultUserPhoto from "../../images/defaultUserImage.png";
import ButtonWithImage from "./ButtonWithImage";

const Profile = () => {
  return (
    <section className="page__profile profile">
      <div className="profile__header">
        <h2 className="profile__title">Profile</h2>
        <ButtonWithImage src={CloseSvg} className="profile__close" />
      </div>
      <img src={DefaultUserPhoto} alt="#" className="profile__image" />
      <div className="profile__fullname">Firstname Surname</div>
      <div className="profile__section">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae
          repellendus est blanditiis officiis laborum aperiam repudiandae itaque eum
          quaerat id cupiditate, aspernatur obcaecati eius velit veniam iste nulla alias
          magni, repellat necessitatibus. Asperiores facere, atque alias molestiae
          temporibus vel.
        </p>
      </div>
      <div className="profile__section">
        <h3>Phone</h3>
        <p>111 111 111</p>
      </div>
      <div className="profile__section">
        <h3>City</h3>
        <p>Moscow / Russia</p>
      </div>
    </section>
  );
};

export default Profile;
