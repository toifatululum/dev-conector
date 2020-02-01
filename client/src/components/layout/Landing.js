import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create developer profile/portofolio, sahre post and get help fro
            other developer
          </p>
          <div className="buttons">
            <Link to="register.html" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="login.html" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
