import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../api";
import CloseSvg from "../../images/close.svg";
import DefaultUserPhoto from "../../images/defaultUserImage.png";
import { closeProfile } from "../../redux/profile/actions";
import { RootStateType } from "../../redux/rootReducer";
import ButtonWithImage from "./ButtonWithImage";

type ProfileUserInfoType = {
  email: string;
  firstName: string;
  lastName: string;
};

const Profile = () => {
  const isOpened = useSelector((state: RootStateType) => state.profile.isOpened);
  const userId = useSelector((state: RootStateType) => state.profile.userId);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState<ProfileUserInfoType | null>(null);
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (!userId) {
          return;
        }
        const { data } = await getUserProfile(userId);
        setUserInfo({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
        });
      } catch (error) {}
    };
    fetchUserInfo();
  }, [userId]);

  if (!isOpened) {
    return null;
  }
  const onCloseClick = () => {
    dispatch(closeProfile());
  };

  return (
    <section className="page__profile profile">
      <div className="profile__header">
        <h2 className="profile__title">Profile</h2>
        <ButtonWithImage
          onClick={onCloseClick}
          src={CloseSvg}
          className="profile__close"
        />
      </div>
      <img src={DefaultUserPhoto} alt="#" className="profile__image" />
      <div className="profile__fullname">
        {userInfo?.firstName} {userInfo?.lastName}
      </div>
      <div className="profile__section">
        <h3>Email</h3>
        <p>{userInfo?.email}</p>
      </div>
    </section>
  );
};

export default Profile;
