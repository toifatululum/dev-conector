import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert } from "../../action/alert";

const Register = props => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      props.setAlert("password not match", "danger");
    } else {
      console.log("SUCCES");
    }
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fa fa-user">Create your account</i>
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />

          <small className="form-text">
            This is user gravatar, so if you want a profil image, use grafatar
            email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            minLength="6"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            minLength="6"
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>
      <p className="my-1">
        Already have an account?
        <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

export default connect(null, { setAlert })(Register);