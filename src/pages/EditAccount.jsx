import React from "react";

export const EditAccount = () => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title-account">Edit my account</h1>

        <form className="form">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            placeholder="your name..."
            id="name"
            className="input input-name"
          />
          <label htmlFor="name" className="email">
            Email Address
          </label>
          <input
            type="email"
            placeholder="your name..."
            id="email"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
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
            value="Create"
            className="primary-btn create-btn"
          />
        </form>
      </div>
    </div>
  );
};
