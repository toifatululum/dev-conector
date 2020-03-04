import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import PostItem from "./PostItem";
import { getPost } from "../../actions/post";

const Post = ({ getPost, post: { post, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fa fa-user"></i> Welcome to the comunity
      </p>
      {/* {PostForm} */}
      <div className="posts">
        {Posts.map(post => {
          <PostItem key={post._id} post={post} />;
        })}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(Posts);
