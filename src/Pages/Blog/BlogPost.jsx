import React, { useEffect, useState } from "react";
import axios from "axios";
import { Heart, MessageCircle } from "lucide-react"; // Import Lucide icons

const BlogPost = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  // Calculate pagination variables
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              {/* Post Title */}
              <h2 className="text-xl font-semibold mb-4 text-gray-900">{post.title}</h2>
              
              {/* Post Body */}
              <p className="text-gray-600 line-clamp-4 mb-4">{post.body}</p>

              {/* Action Icons */}
              <div className="flex justify-between items-center text-gray-600">
                <button className="flex items-center space-x-1 hover:text-teal-500 transition-all">
                  <Heart size={20} />
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-teal-500 transition-all">
                  <MessageCircle size={20} />
                  <span>Comment</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            className={`px-4 py-2 bg-blue-500 text-white rounded ${currentPage === 1 && "opacity-50 cursor-not-allowed"}`}
            onClick={() => currentPage > 1 && setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-lg">Page {currentPage} of {totalPages}</span>
          <button
            className={`px-4 py-2 bg-blue-500 text-white rounded ${currentPage === totalPages && "opacity-50 cursor-not-allowed"}`}
            onClick={() => currentPage < totalPages && setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
