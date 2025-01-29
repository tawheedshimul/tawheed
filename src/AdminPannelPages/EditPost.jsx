import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify';
import axios from 'axios';

const EditPost = () => {
  const { postId } = useParams(); // Get the postId from the URL
  const navigate = useNavigate(); // For navigation after saving
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [postNo, setPostNo] = useState('');

  // Fetch the post data based on postId
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://blog-server-ten-sand.vercel.app/posts/${postId}`);
        const post = response.data;
        setTitle(post.title);
        setBody(post.body);
        setPostNo(post.postNo);
      } catch (error) {
        console.error('Error fetching post:', error);
        alert('Failed to fetch post data.');
      }
    };

    fetchPost();
  }, [postId]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const sanitizedBody = DOMPurify.sanitize(body);
    const updatedPost = { title, body: sanitizedBody, postNo };

    try {
      await axios.put(`https://blog-server-ten-sand.vercel.app/posts/${postId}`, updatedPost);
      alert('Post updated successfully!');
      navigate('/adminpannel'); // Redirect to the admin panel after saving
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Failed to update post.');
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Edit Post</h1>
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Post No</label>
          <input
            type="text"
            value={postNo}
            onChange={(e) => setPostNo(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Body</label>
          <ReactQuill
            value={body}
            onChange={setBody}
            className="bg-white rounded-md"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;