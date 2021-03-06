import React from "react";

export const NewPassword = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="https://img.icons8.com/glyph-neue/64/000000/potted-plant.png" />
        <span>Plants Ecommerce</span>
        <h1 className="title">New Password Form</h1>
        <p className="subtitle">Create a new Password</p>

        <form className="form">
          <label htmlFor="password" className="password">
            Password
          </label>
          <input
            type="password"
            placeholder="*********"
            id="password"
            className="input input-password"
          />
          <label htmlFor="password" className="password">
            Repeat Password
          </label>
          <input
            type="repeat-password"
            placeholder="*********"
            id="password"
            className="input input-password"
          />
          <input
            type="submit"
            value="Submit"
            className="primary-btn login-btn"
          />
        </form>
      </div>
    </div>
  );
};
