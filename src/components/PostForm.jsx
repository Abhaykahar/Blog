import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PostForm = ({ savePost, posts = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentPost = id ? posts.find(post => post.id === parseInt(id)) : null;
  const [title, setTitle] = useState(currentPost ? currentPost.title : '');
  const [content, setContent] = useState(currentPost ? currentPost.content : '');

  useEffect(() => {
    if (currentPost) {
      setTitle(currentPost.title);
      setContent(currentPost.content);
    }
  }, [currentPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      savePost(parseInt(id), { title, content, date: currentPost.date });
    } else {
      savePost({ title, content, date: new Date() });
    }
    navigate('/');
  };

  return (
    <div className="container">
        <div className="row">
            <h1 className='text-center'> {id ? 'Edit Post' : 'Add Post'}</h1>
            <div className="col-lg-6 mx-auto border  border-dark p-4 mt-4">
            <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-2">
        <label>Content</label>
        <textarea
          className="form-control"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-dark mt-3 mx-auto d-block">
        {id ? 'Update Post' : 'Create Post'}
      </button>
    </form>
            </div>
        </div>
    </div>
  );
};

export default PostForm;
