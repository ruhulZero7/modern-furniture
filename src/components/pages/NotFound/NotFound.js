import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h2>Page Not Found !</h2>
      <NavLink to={"/"}>
        <button className="btn btn-warning">Back To Home</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
