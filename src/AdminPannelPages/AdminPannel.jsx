import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PostList from './PostList';

const AdminPanel = () => {
  const [posts, setPosts] = useState([]);
//   const [postToEdit, setPostToEdit] = useState(null);
  const navigate = useNavigate(); // For navigation to the edit page

  // Fetch all posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://blog-server-ten-sand.vercel.app/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Delete a post
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://blog-server-ten-sand.vercel.app/posts/${id}`);
      fetchPosts(); // Refresh the list
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  // Navigate to the edit page
  const handleEdit = (post) => {
    navigate(`/edit-post/${post._id}`); // Navigate to the edit page
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
      {/* <PostForm postToEdit={postToEdit} onSave={fetchPosts} /> */}
      <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default AdminPanel;