import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="https://img.icons8.com/glyph-neue/64/000000/potted-plant.png" />
        <span>Plants Ecommerce</span>
        <form className="form">
          <label htmlFor="password" className="password">
            Email
          </label>
          <input
            type="email"
            placeholder="example@mail.com"
            id="email"
            className="input input-email"
          />
          <label htmlFor="password" className="password">
            Password
          </label>
          <input
            type="repeat-password"
            placeholder="*********"
            id="password"
            className="input input-password"
          />
          <input
            type="submit"
            value="Log In"
            className="primary-btn login-btn"
          />
          <a href="/">Forgot my password</a>
          <button className="secondary-btn signup">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
