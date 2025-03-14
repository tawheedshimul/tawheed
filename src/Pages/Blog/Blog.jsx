import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { Drawer } from 'antd';
import { useMediaQuery } from 'react-responsive';
import Loading from '../../utilities/Loading';
import { CloseOutlined } from '@ant-design/icons';

const Blog = () => {
    const [selectedContent, setSelectedContent] = useState('');
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://portfolio-backend-six-xi.vercel.app/posts');
                const normalizedData = response.data.map(post => ({
                    id: post._id,
                    title: post.title,
                    body: post.content || post.body || '',
                    postNo: post.postNo || ''
                })).sort((a, b) => a.postNo - b.postNo);

                setData(normalizedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const handlePopState = () => {
            if (isDrawerVisible) {
                setIsDrawerVisible(false);
                window.history.replaceState({}, '');
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [isDrawerVisible]);

    const handleClick = (id) => {
        setSelectedContent(id);
        if (isMobile) {
            setIsDrawerVisible(true);
            window.history.pushState({ drawerOpen: true }, '');
        }
    };

    const filteredData = data.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const highlightText = (text, term) => {
        if (!term) return text;
        return text.split(new RegExp(`(${term})`, 'gi')).map((part, index) =>
            part.toLowerCase() === term.toLowerCase() ? <span key={index} className="text-red-500">{part}</span> : part
        );
    };

    const renderHTML = (html) => ({ __html: DOMPurify.sanitize(html) });

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen bg-[#121212]"><Loading /></div>;
    }

    return (
        <div className='flex flex-col md:flex-row items-start h-[calc(100vh-117px)] bg-[#121212]'>
            <div className='w-full md:w-3/12 h-[calc(100vh-117px)] bg-[#1a1a1a] overflow-y-auto p-4'>
                <div className='mb-4 sticky top-0'>
                    <input
                        type="text"
                        placeholder="Search content..."
                        className="w-full p-2 bg-[#2b2b2b] text-white rounded-lg focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {filteredData.map(post => (
                    <div
                        key={post.id}
                        className={`cursor-pointer text-white mb-4 hover:text-teal-500 transition-all ${selectedContent === post.id ? 'bg-[#333333] rounded p-2 text-emerald-500' : ''}`}
                        onClick={() => handleClick(post.id)}
                    >
                        <span className="text-gray-400 mr-2">{post.postNo}</span>
                        {highlightText(post.title, searchTerm)}
                    </div>
                ))}
            </div>
            <div className='hidden md:block w-9/12 p-4'>
                <div className='bg-[#1c1c1c] p-6 rounded-lg shadow-lg overflow-y-auto h-[calc(100vh-150px)]'>
                    {selectedContent ? (
                        data.filter(post => post.id === selectedContent).map(post => (
                            <div key={post.id}>
                                <h2 className='text-2xl text-teal-500 font-semibold mb-4'>{post.title}</h2>
                                <div className='text-white' dangerouslySetInnerHTML={renderHTML(post.body)} />
                                <div className='mt-4 bg-teal-500 h-1 w-16'></div>
                            </div>
                        ))
                    ) : (
                        <p className='text-white'>Please select a content item on the left to view more details.</p>
                    )}
                </div>
            </div>
            {isMobile && (
                <Drawer
                title={
                    selectedContent ? (
                        <div className="marquee">
                            {data.find((post) => post.id === selectedContent)?.title}
                        </div>
                    ) : (
                        "Drawer Title"
                    )
                }
                placement="right"
                onClose={() => setIsDrawerVisible(false)}
                visible={isDrawerVisible}
                width="100%"
                className="bg-[#1a1a1a] text-white"
                headerStyle={{
                    backgroundColor: '#1a1a1a',
                    borderBottom: '1px solid #333',
                    padding: '12px 10px',
                }}
                bodyStyle={{
                    backgroundColor: '#1a1a1a',
                    padding: '12px 0px',
                }}
                closeIcon={<CloseOutlined style={{ color: 'white', fontSize: "25px", backgroundColor:"black", padding:"10px", zIndex:"1" }} />}
            >
                {selectedContent && (
                    <div className='bg-[#1c1c1c] px-2 rounded-lg shadow-lg'>
                        {data.filter((post) => post.id === selectedContent).map((post) => (
                            <div key={post.id}>
                                <h2 className='text-2xl text-teal-500 font-semibold mb-4'>
                                    {post.title}
                                </h2>
                                <div className='text-white text-justify' dangerouslySetInnerHTML={renderHTML(post.body)} />
                                <div className='mt-4 bg-teal-500 h-1 w-16'></div>
                            </div>
                        ))}
                    </div>
                )}
            </Drawer>
            )}
        </div>
    );
};

export default Blog;
