import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostDetails from './components/PostDetails';
import Header from './components/Header';
import './components/app.css'

const App = () => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    const newPost = { ...post, id: posts.length + 1, date: new Date() };
    setPosts([...posts, newPost]);
    toast.success('Post created successfully!');
  };

  const editPost = (id, updatedPost) => {
    const updatedPosts = posts.map(post => 
      post.id === id ? { ...post, ...updatedPost } : post
    );
    setPosts(updatedPosts);
    toast.info('Post updated successfully!');
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    toast.error('Post deleted!');
  };

  return (
    <Router>
      <Header/>
      <div className="container mt-5">
        <ToastContainer
          autoClose={1000}
        />
        <Routes>
          <Route path="/" element={<PostList posts={posts} deletePost={deletePost} />} />
          <Route path="/new" element={<PostForm savePost={addPost} />} />
          <Route path="/post/:id" element={<PostDetails posts={posts} />} />
          <Route path="/edit/:id" element={<PostForm savePost={editPost} posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;