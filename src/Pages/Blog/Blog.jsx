import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
    const [selectedContent, setSelectedContent] = useState('');
    const [data, setData] = useState(null);  // State to store fetched API data
    const [searchTerm, setSearchTerm] = useState('');  // State to store search term

    // Fetch data from JSON API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(response.data);  // Store API data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs once when the component mounts

    // Handler to change selected content
    const handleClick = (content) => {
        setSelectedContent(content);
    };

    // Filter data based on search term
    const filteredData = data?.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Function to highlight matched text in title
    const highlightText = (text, term) => {
        const parts = text.split(new RegExp(`(${term})`, 'gi')); // Split text into parts based on the search term
        return parts.map((part, index) => 
            part.toLowerCase() === term.toLowerCase() 
                ? <span key={index} className="text-red-500">{part}</span> 
                : part
        );
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

                {/* List of Content */}
                {filteredData && filteredData.map((post) => (
                    <div
                        key={post.id}
                        className={`cursor-pointer text-white mb-4 hover:text-teal-500 transition-all ${selectedContent === post.id ? 'bg-[#333333] rounded p-2 text-emerald-500' : ''}`} 
                        onClick={() => handleClick(post.id)} // Set selected content by post ID
                    >
                        {highlightText(post.title, searchTerm)}
                    </div>
                ))}
            </div>

            {/* Right Section */}
            <div className='w-9/12 p-4'>
                <p className='text-white'>
                    {/* Dynamically render content based on selected content */}
                    {selectedContent && data && (
                        <div className='bg-[#1c1c1c] p-6 rounded-lg shadow-lg'>
                            {/* Find selected post data */}
                            {data
                                .filter((post) => post.id === selectedContent)
                                .map((post) => (
                                    <div key={post.id}>
                                        <h2 className='text-2xl text-teal-500 font-semibold mb-4'>
                                            {post.title}
                                        </h2>
                                        <p className='text-white'>{post.body}</p>
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
