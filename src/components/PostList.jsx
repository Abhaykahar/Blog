import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, deletePost }) => {
  return (
    <>
    
   
    <div>
      <h1 className='mb-3'>All Posts</h1>
      <Link to="/new" className="btn btn-dark mb-3">New Post</Link>
      {posts.length > 0 ? (
        <div className="row">
          {posts
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((post) => (
              <div key={post.id} className="col-md-4 mb-4">
                <div className="card p-4 shadow">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content.substring(0, 100)}...</p>
                    <Link to={`/post/${post.id}`} className="btn btn-dark">View</Link>
                    <Link to={`/edit/${post.id}`} className="btn btn-dark mx-2">Edit</Link>
                    <button className="btn btn-dark" onClick={() => deletePost(post.id)}>Delete</button>
                  </div>
                  <div className="card-footer text-muted">
                    Posted on {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <p>No posts available. <Link to="/new">Create one now</Link>.</p>
      )}
    </div>
    </>
  );
};

export default PostList;
