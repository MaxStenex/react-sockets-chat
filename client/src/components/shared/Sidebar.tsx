import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import ArchiveSvg from "../../images/archive.svg";
import ChatSvg from "../../images/chat.svg";
import DefaultUserImage from "../../images/defaultUserImage.png";
import FriendsSvg from "../../images/friends.svg";
import LogoSvg from "../../images/logo.svg";
import NightModeSvg from "../../images/moon.svg";
import FavoriteSvg from "../../images/star.svg";
import { logoutUser } from "../../redux/user/actions";
import { OptionsTypes } from "../../types";
import Options from "./Options/index";
import Option from "./Options/Option";

const Sidebar = () => {
  const [isUserOptionsOpened, setIsUserOptionsOpened] = React.useState(false);
  const toggleUserOptions = () => {
    setIsUserOptionsOpened((prev) => !prev);
  };
  const dispatch = useDispatch();
  const onLogoutClick = () => dispatch(logoutUser());

  return (
    <div className="sidebar">
      <div className="sidebar__main">
        <a href="/" className="sidebar__logo">
          <img src={LogoSvg} alt="Logo" className="navigation__logo" />
        </a>
        <nav className="navigation">
          <ul className="navigation__links">
            <li className="navigation__link">
              <NavLink to="/chat" activeClassName="selected-link">
                <img src={ChatSvg} alt="chat" />
              </NavLink>
            </li>
            <li className="navigation__link">
              <NavLink to="/friends" activeClassName="selected-link">
                <img src={FriendsSvg} alt="friends" />
              </NavLink>
            </li>
            <li className="navigation__link">
              <NavLink to="/favorite" activeClassName="selected-link">
                <img src={FavoriteSvg} alt="favorite" />
              </NavLink>
            </li>
            <li className="navigation__link">
              <NavLink to="/archive" activeClassName="selected-link">
                <img src={ArchiveSvg} alt="archive" />
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
            <Options>
              <Option type={OptionsTypes.DEFAULT} text="Edit profile" href="/" />
              <Option type={OptionsTypes.DEFAULT} text="Profile" href="/" />
              <Option
                onClick={onLogoutClick}
                type={OptionsTypes.DANGER}
                text="Logout"
                href="/login"
              />
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
