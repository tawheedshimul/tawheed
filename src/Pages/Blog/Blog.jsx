import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify'; // For sanitizing HTML content
import Loading from '../../utilities/Loading';

const Blog = () => {
    const [selectedContent, setSelectedContent] = useState('');
    const [data, setData] = useState([]);  // State to store fetched API data
    const [searchTerm, setSearchTerm] = useState('');  // State to store search term
    const [isLoading, setIsLoading] = useState(true);  // State to manage loading status

    // Fetch data from JSON API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://blog-server-ten-sand.vercel.app/posts');
                // Normalize data to use 'id' instead of '_id' and ensure 'body' field exists
                const normalizedData = response.data.map(post => ({
                    id: post._id,
                    title: post.title,
                    body: post.content || post.body || '', // Use 'content' if 'body' is missing
                    postNo: post.postNo || '' // Include postNo in the normalized data
                }));
                setData(normalizedData);  // Store normalized API data
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);  // Set loading to false once data is fetched or if there's an error
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs once when the component mounts

    // Handler to change selected content
    const handleClick = (id) => {
        setSelectedContent(id);
    };

    // Filter data based on search term
    const filteredData = data.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Function to highlight matched text in title
    const highlightText = (text, term) => {
        if (!term) return text;
        const parts = text.split(new RegExp(`(${term})`, 'gi')); // Split text into parts based on the search term
        return parts.map((part, index) =>
            part.toLowerCase() === term.toLowerCase()
                ? <span key={index} className="text-red-500">{part}</span>
                : part
        );
    };

    // Function to safely render HTML content
    const renderHTML = (html) => {
        const sanitizedHTML = DOMPurify.sanitize(html); // Sanitize HTML to prevent XSS
        return { __html: sanitizedHTML };
    };

    return (
        <div className='flex items-start h-[calc(100vh-117px)] bg-[#121212]'>
            {/* Left Section with Scroll */}
            <div className='w-3/12 h-[calc(100vh-117px)] bg-[#1a1a1a] overflow-y-auto p-4'>
                {/* Search Box */}
                <div className='mb-4 sticky top-0'>
                    <input
                        type="text"
                        placeholder="Search content..."
                        className="w-full p-2 bg-[#2b2b2b] text-white rounded-lg focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Loading State */}
                {isLoading ? (
                    <Loading />
                ) : (
                    /* List of Content */
                    filteredData.map((post) => (
                        <div
                            key={post.id}
                            className={`cursor-pointer text-white mb-4 hover:text-teal-500 transition-all ${selectedContent === post.id ? 'bg-[#333333] rounded p-2 text-emerald-500' : ''}`}
                            onClick={() => handleClick(post.id)} // Set selected content by post ID
                        >
                            {/* Display postNo alongside the title */}
                            <span className="text-gray-400 mr-2">{post.postNo}</span>
                            {highlightText(post.title, searchTerm)}
                        </div>
                    ))
                )}
            </div>

            {/* Right Section */}
            <div className='w-9/12 p-4 '>
                <p className='text-white '>
                    {/* Dynamically render content based on selected content */}
                    {selectedContent && (
                        <div className='bg-[#1c1c1c] p-6 rounded-lg shadow-lg overflow-y-auto h-[calc(100vh-150px)]'>
                            {/* Find selected post data */}
                            {data
                                .filter((post) => post.id === selectedContent)
                                .map((post) => (
                                    <div key={post.id}>
                                        <h2 className='text-2xl text-teal-500 font-semibold mb-4'>
                                            {post.title}
                                        </h2>
                                        {/* Render rich text content */}
                                        <div
                                            className='text-white '
                                            dangerouslySetInnerHTML={renderHTML(post.body)} // Safely render HTML
                                        />
                                        <div className='mt-4 bg-teal-500 h-1 w-16'></div>
                                    </div>
                                ))}
                        </div>
                    )}
                    {/* Default content when nothing is selected */}
                    {!selectedContent && (
                        <div className='bg-[#1c1c1c] p-6 rounded-lg shadow-lg'>
                            <p className='text-white'>
                                Please select a content item on the left to view more details.
                            </p>
                        </div>
                    )}
                </p>
            </div>
        </div>
    );
};

export default Blog;