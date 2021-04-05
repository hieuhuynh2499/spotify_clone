import React, { useState } from "react";
import "./style.scss";
import logo from "../../images/header/logoSpotify.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleshowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="header__logo">
            <img className="header__logo-image" src={logo} alt="" />
          </div>
          <nav className="navbar">
            <ul className="navbar__ul">
              <li className="navbar__li">
                <Link to="#">Premium</Link>
              </li>
              <li className="navbar__li">
                <Link to="#">Hỗ trợ</Link>
              </li>
              <li className="navbar__li">
                <Link to="#">Tải xuống</Link>
              </li>
              <li className="navbar__li">
                <Link to="#">Đăng ký</Link>
              </li>
              <li className="navbar__li">
                <Link to="#">Đăng nhập</Link>
              </li>
            </ul>
          </nav>
          <div className="header__bars" onClick={handleshowMenu}>
            <FaBars />
          </div>
        </div>
      </div>
      <div
        className={
          showMenu ? "navbar__mobile show--menu" : "navbar__mobile off--menu"
        }
      >
        <nav>
          <ul className="navbar__mobile-ul">
            {showMenu && (
              <>
                <li className="navbar__mobile-li">
                  <Link className="navbar__mobile-link" to="#">
                    Premium
                  </Link>
                </li>
                <li className="navbar__mobile-li">
                  <Link className="navbar__mobile-link" to="#">
                    Hỗ trợ
                  </Link>
                </li>
                <li className="navbar__mobile-li">
                  <Link className="navbar__mobile-link" to="#">
                    Tải xuống
                  </Link>
                </li>
                <li className="navbar__mobile-li">
                  <div></div>
                </li>
                <li className="navbar__mobile-li">
                  <Link className="navbar__mobile-link" to="#">
                    Đăng ký
                  </Link>
                </li>
                <li className="navbar__mobile-li">
                  <Link className="navbar__mobile-link" to="#">
                    Đăng nhập
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <div className="navbar__mobile-logo">
          <img className="header__logo-image" src={logo} alt="" />
        </div>
      </div>
    </header>
  );
}
export default Header;
