import React from "react";
import logo from "../img/The Only One (2).jpg";

export const EmailSent = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />

        <h1 className="title">Email has been sent</h1>
        <p className="subtitle">
          Please check your inbox for instructions and how to reset your
          password
        </p>
        <div className="email-img">
          <i className="fas fa-envelope-open mail-icon"></i>
        </div>
        <button className="primary-btn login-btn">Login</button>
        <p className="resend">
          <span>Did not receive the email </span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};
