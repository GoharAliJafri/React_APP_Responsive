import React from "react";
import "./Loginform.css";

const Loginform = () => {
  return (
    <div>
        <div className="flex-r login-wrapper rflex ">
          <div className="login-text">
            <div className="logo">
              <span>
                <i className="fab fa-speakap"></i>
              </span>
              <span>Coders</span>
            </div>
            <h1>Sign Up</h1>
            <p>It's not long before you embark on this journey! </p>

            <form className="flex-c cflex">
              <div className="input-box">
                <span className="label">E-mail</span>
                <div className=" flex-r input">
                  <input type="text" placeholder="name@abc.com" />
                  <i className="fas fa-at"></i>
                </div>
              </div>

              <div className="input-box">
                <span className="label">Password</span>
                <div className="flex-r input">
                  <input type="password" placeholder="8+ (a, A, 1, #)" />
                  <i className="fas fa-lock"></i>
                </div>
              </div>

              <div className="check">
                <input type="checkbox" name="" id="" />
                <span>I've read and agree with T & C</span>
              </div>

              <input className="btn1" type="submit" value="Create an Account" />
              <span className="extra-line">
                <span>Already have an account?</span>
                <a href="/">Sign In</a>
              </span>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Loginform;
