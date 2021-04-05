import React from "react";
import "./style.scss";
import logo from "../../images/header/logoSpotify-black.svg";
import { RiFacebookCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function Register(props) {
  return (
    <section className="register ">
      <div className="register__logo text--center">
        <img src={logo} alt="" />
      </div>
      <h3 className="register__title text--center">
        Sign up for free to start listening.
      </h3>
      <div className="display--center">
        <div className="login--link">
          <Link className="bg--face text-white">
            <RiFacebookCircleFill /> continue with facebook
          </Link>
        </div>
      </div>
      <div className="linethrough--or">
        <span></span>
      </div>
      <div className="register__form">
        <form action="">
          <div className="input--form">
            <label htmlFor="">Email address or username</label>
            <input
              className="border--radius"
              type="text"
              placeholder="Email address or username"
            />
          </div>
          <Link className="text--green text--underline" to="">
            Use phone number instead.
          </Link>
          <div className="input--form">
            <label htmlFor="">Confirm your email</label>
            <input
              className="border--radius"
              type="text"
              placeholder="Enter your email again."
            />
          </div>
          <div className="input--form">
            <label htmlFor="">Create a password</label>
            <input
              className="border--radius"
              type="text"
              placeholder="Create a password"
            />
          </div>
          <div className="input--form">
            <label htmlFor="">What should we call you?</label>
            <input
              className="border--radius"
              type="text"
              placeholder="Enter a profile name."
            />
          </div>
          <h3>What's your date of birth?</h3>
          <div className="register__time">
            <div className="register__date">
              <label htmlFor="">Day</label>
              <input type="number" placeholder="DD" />
            </div>
            <div className="register__month">
              <label htmlFor="">Month</label>
              <select name="month" id="cars" placeholder="MONTH">
                <option value="january">january</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="Devember">Devember</option>
              </select>
            </div>
            <div className="register__year">
              <label htmlFor="">Year</label>
              <input type="number" placeholder="YYYY" />
            </div>
          </div>
          <h3>What's your gender?</h3>
          <div className="register__radio">
            <div className="register__radio-item">
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">Male</label>
            </div>
            <div className="register__radio-item">
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">Female</label>
            </div>
            <div className="register__radio-item">
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">Non-binary</label>
            </div>
          </div>
          <div className="register__check">
            <input type="checkbox" />
            <span>
              Share my registration data with Spotify's content providers for
              marketing purposes.
            </span>
          </div>
          <div className="register__text">
            <p>
              <span>By clicking on Sign up, you agree to Spotify's </span>
              <Link className="text--green text--underline" to="#">
                Terms and Conditions of Use.
              </Link>
              <br />
              <br />
              <span>
                To learn more about how Spotify collects, uses, shares and
                protects your personal data please read Spotify's
                <Link className="text--green text--underline" to="#">
                  Privacy Policy.
                </Link>
              </span>
            </p>
          </div>
          <button
            type="submit"
            className="btn width--100 bg--green text-white mt-2"
          >
            sign up
          </button>
        </form>
      </div>
      <h3 className="text--center">
        Have an account?{" "}
        <Link to="" className="text--green text--underline">
          Log in.
        </Link>
      </h3>
    </section>
  );
}

export default Register;
