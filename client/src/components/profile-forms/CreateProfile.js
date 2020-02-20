import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CreateProfile = props => {
  const [fromData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: ""
  });

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = fromData;

  const onChange = e =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Create Your Profile</h1>
      <p className="lead">
        <i className="fa fa-user"></i>Let's get some information to make your
        profile stand out
      </p>
      <small>* = required fields</small>
      <form className="form">
        <div className="form-group">
          <select name="status" value={status} onChange={e => onChange(e)}>
            <option value="0">*Select Profesional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={e => onChange(e)}
          />

          <small className="form-text">
            City & state suggest (eg. Boston, MA
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Skills" name="skills" />
          <small className="form-text">
            Please use comma separated values (eg. HTML, CSS, JavaScript,PHP)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
          />
          <small className="form-text">
            If you want your leastes repos and a Github Link, include your
            username
          </small>
        </div>
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio"></textarea>
          <small className="form-text">Tell us a litle about yourself</small>
        </div>
        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network
          </button>
          <span>Optional</span>
        </div>
        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fa fa-twitter fa-2x"></i>
              <input type="text" placeholder="Twitter URL" name="twitter" />
            </div>
            <div className="form-group social-input">
              <i className="fa fa-facebook fa-2x"></i>
              <input type="text" placeholder="Facebook URL" name="facebook" />
            </div>
            <div className="form-group social-input">
              <i className="fa fa-youtube fa-2x"></i>
              <input type="text" placeholder="Youtube URL" name="youtube" />
            </div>
            <div className="form-group social-input">
              <i className="fa fa-linkedin fa-2x"></i>
              <input type="text" placeholder="Linked-In URL" name="linkedin" />
            </div>
            <div className="form-group social-input">
              <i className="fa fa-instagram fa-2x"></i>
              <input type="text" placeholder="Instagram URL" name="instagram" />
            </div>
          </Fragment>
        )}

        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
