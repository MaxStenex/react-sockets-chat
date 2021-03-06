import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../api";
import ChatSvg from "../../images/chat.svg";
import DefaultUserImage from "../../images/defaultUserImage.png";
import FriendsSvg from "../../images/friends.svg";
import LogoSvg from "../../images/logo.svg";
import NightModeSvg from "../../images/moon.svg";
import { openProfile } from "../../redux/profile/actions";
import { RootStateType } from "../../redux/rootReducer";
import { logoutUser } from "../../redux/user/actions";
import { OptionsTypes } from "../../types";
import Options from "./Options/index";
import Option from "./Options/Option";

const Sidebar = () => {
  const [isUserOptionsOpened, setIsUserOptionsOpened] = React.useState(false);
  const dispatch = useDispatch();
  const userId = useSelector((state: RootStateType) => state.user.id);

  const toggleUserOptions = () => {
    setIsUserOptionsOpened((prev) => !prev);
  };
  const onLogoutClick = async () => {
    try {
      dispatch(logoutUser());
      await logout();
    } catch (error) {}
  };
  const openUserProfile = () => {
    if (userId) {
      dispatch(openProfile(userId));
      setIsUserOptionsOpened(false);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__main">
        <a href="/" className="sidebar__logo">
          <img src={LogoSvg} alt="Logo" className="navigation__logo" />
        </a>
        <nav className="navigation">
          <ul className="navigation__links">
            <li className="navigation__link">
              <NavLink to="/chats" activeClassName="selected-link">
                <img src={ChatSvg} alt="chat" />
              </NavLink>
            </li>
            <li className="navigation__link">
              <NavLink to="/friends" activeClassName="selected-link">
                <img src={FriendsSvg} alt="friends" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="sidebar__footer">
        <button className="sidebar__toggle-mode">
          <img src={NightModeSvg} alt="mode" />
        </button>
        {isUserOptionsOpened && (
          <div className="sidebar__options">
            <Options closeOptions={() => setIsUserOptionsOpened(false)}>
              <Option type={OptionsTypes.DEFAULT} text="Edit profile" />
              <Option
                onClick={openUserProfile}
                type={OptionsTypes.DEFAULT}
                text="Profile"
              />
              <Option onClick={onLogoutClick} type={OptionsTypes.DANGER} text="Logout" />
            </Options>
          </div>
        )}
        <button onClick={toggleUserOptions} className="sidebar__user-photo">
          <img src={DefaultUserImage} alt="profile" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
