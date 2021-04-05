import React from "react";
import logo from "../../images/header/logoSpotify.svg";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./style.scss";
function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__logo">
            <img src={logo} alt="" />
          </div>
          <div className="footer__center">
            <div className="footer__company">
              <h3 className="footer__title">CÔNG TY</h3>
              <ul className="footer__list">
                <li className="footer__li">
                  <Link>Giới thiệu</Link>
                </li>
                <li className="footer__li">
                  <Link>Việc làm</Link>
                </li>
                <li className="footer__li">
                  <Link>For the Record</Link>
                </li>
              </ul>
            </div>
            <div className="footer__community">
              <h3 className="footer__title">CỘNG ĐỒNG</h3>
              <ul className="footer__list">
                <li className="footer__li">
                  <Link>Dành cho các Nghệ sĩ</Link>
                </li>
                <li className="footer__li">
                  <Link>Nhà phát triển</Link>
                </li>
                <li className="footer__li">
                  <Link>Quảng cáo</Link>
                </li>
                <li className="footer__li">
                  <Link>Nhà đầu tư</Link>
                </li>
                <li className="footer__li">
                  <Link>Nhà cung cấp</Link>
                </li>
              </ul>
            </div>
            <div className="footer__community">
              <h3 className="footer__title">LIÊN KẾT HỮU ÍCH</h3>
              <ul className="footer__list">
                <li className="footer__li">
                  <Link>Hỗ trợ</Link>
                </li>
                <li className="footer__li">
                  <Link>Trình phát Web</Link>
                </li>
                <li className="footer__li">
                  <Link>Ứng dụng Di động Miễn phí</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__Social-Network">
            <div className="footer__icon">
              <FaInstagram />
            </div>
            <div className="footer__icon">
              <FaFacebookF />
            </div>
            <div className="footer__icon">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
