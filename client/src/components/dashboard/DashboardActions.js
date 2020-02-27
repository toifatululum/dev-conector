import React from "react";
import { Link } from "react-router-dom";

export const DashboardActions = () => {
  return (
    <div class="dash-buttons">
      <Link to="/edit-profile" class="btn">
        <i class="fa fa-user-circle text-primary">Edit Profile</i>
      </Link>
      <Link to="/add-experience" class="btn">
        <i class="fa fa-black-tie text-primary">Add Experience</i>
      </Link>
      <Link to="/add_education" class="btn">
        <i class="fa fa-graduation-cap text-primary">Add Education</i>
      </Link>
    </div>
  );
};
