import React from "react";
import logo from "../../images/header/logoSpotify-black.svg";
import "./style.scss";
import { Link } from "react-router-dom";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
function Login(props) {
  return (
    <section className="login">
      <div className="login__logo">
        <img src={logo} alt="" />
      </div>
      <div className="login__network">
        <h2>To continue, log in to Spotify.</h2>
        <div className="login--link">
          <Link className="bg--face text-white">
            <RiFacebookCircleFill /> continue with facebook
          </Link>
        </div>
        <div className="login--link">
          <Link className="bg--black text-white">
            <AiFillApple /> continue with apple
          </Link>
        </div>
        <div className="login--link">
          <Link className="bg--white text-black border--gray">
            <FcGoogle /> continue with google
          </Link>
        </div>
        <div className="login--link">
          <Link className="bg--white text-black border--gray">
            continue with phpne number
          </Link>
        </div>
      </div>
      <div className="login__or">
        <div className="linethrough--or">
          <span></span>
        </div>
      </div>
      <div className="login__form">
        <form action="">
          <div className="input--form">
            <label htmlFor="">Email address or username</label>
            <input type="text" placeholder="Email address or username" />
          </div>
          <div className="input--form">
            <label htmlFor="">Password</label>
            <input type="text" placeholder="Password" />
          </div>
          <Link className="input--form">Forgot your password?</Link>
          <div className="login__submit">
            <div className="login__checkbox">
              <input type="checkbox" /> <span>Remember me</span>
            </div>
            <button className="btn bg--green text-white">log in</button>
          </div>
        </form>
      </div>
      <h3>Don't have an account?</h3>
      <div className="display--center">
        <div className="login--link">
          <Link className="bg--white text-black border--gray bg--white-hover">
            sign up for spotify
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
