import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify';
import axios from 'axios';

const PostForm = ({ postToEdit }) => {
    const [title, setTitle] = useState(postToEdit ? postToEdit.title : '');
    const [body, setBody] = useState(postToEdit ? postToEdit.body : '');
    const [postNo, setPostNo] = useState(postToEdit ? postToEdit.postNo : '');
    const [message, setMessage] = useState(''); // To show success/error messages

    const handleSubmit = async (e) => {
        e.preventDefault();
        const sanitizedBody = DOMPurify.sanitize(body);
        const postData = { title, body: sanitizedBody, postNo };

        try {
            if (postToEdit) {
                // Update existing post
                await axios.put(`https://blog-server-ten-sand.vercel.app/posts/${postToEdit._id}`, postData);
                setMessage('Post updated successfully!');
            } else {
                // Create new post
                await axios.post('https://blog-server-ten-sand.vercel.app/posts', postData);
                setMessage('Post created successfully!');
            }
            // Clear the form fields
            setTitle('');
            setBody('');
            setPostNo('');
        } catch (error) {
            console.error('Error saving post:', error);
            setMessage('Failed to save post.');
        }
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{postToEdit ? 'Edit Post' : 'Create Post'}</h2>
            {message && (
                <div className={`mb-4 p-4 rounded-md ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {message}
                </div>
            )}
            <form onSubmit={handleSubmit}>
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
                    {postToEdit ? 'Update Post' : 'Create Post'}
                </button>
            </form>
        </div>
    );
};

export default PostForm;