import React from 'react';

const PostList = ({ posts, onEdit, onDelete }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">All Posts</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Post No</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post._id} className="hover:bg-gray-100">
              <td className="p-2 border">{post.postNo}</td>
              <td className="p-2 border">{post.title}</td>
              <td className="p-2 border">
                <button
                  onClick={() => onEdit(post)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(post._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;