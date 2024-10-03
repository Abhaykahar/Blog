import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PostDetails = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className='container'>
      <div className="row">
        <h1 className='text-center mb-4'>View Post</h1>
        <div className="col-lg-6 mx-auto border text-center p-5 shadow">
        <h2>Title:- {post.title}</h2>
      <p>Content:- {post.content}</p>
      <p className='mb-3'><small>Posted on: {new Date(post.date).toLocaleDateString()}</small></p>
      <Link className='btn btn-dark d-block ms-auto' to='/'>Back</Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
