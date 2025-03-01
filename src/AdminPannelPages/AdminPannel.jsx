import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { List, Button, Modal, Spin, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const AdminPanel = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch all posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://blog-server-ten-sand.vercel.app/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      message.error('Failed to fetch posts');
    } finally {
      setLoading(false); // Stop loading whether successful or not
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Delete a post with confirmation
  const handleDelete = (id) => {
    confirm({
      title: 'Are you sure you want to delete this post?',
      icon: <ExclamationCircleOutlined />,
      content: 'This action cannot be undone.',
      onOk: async () => {
        try {
          await axios.delete(`https://blog-server-ten-sand.vercel.app/posts/${id}`);
          message.success('Post deleted successfully');
          fetchPosts(); // Refresh the list
        } catch (error) {
          console.error('Error deleting post:', error);
          message.error('Failed to delete post');
        }
      },
      onCancel: () => {
        console.log('Deletion canceled');
      },
    });
  };

  // Navigate to the edit page
  const handleEdit = (post) => {
    navigate(`/edit-post/${post._id}`);
  };

  return (
    <div className='px-4'  style={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Admin Panel</h1>
      {loading ? (
        <div style={{ textAlign: 'center', marginTop: '20%' }}>
          <Spin size="large" />
        </div>
      ) : (
        <List
          dataSource={posts}
          renderItem={(post) => (
            <List.Item
              actions={[
                <Button type="link" onClick={() => handleEdit(post)}>
                  Edit
                </Button>,
                <Button type="link" danger onClick={() => handleDelete(post._id)}>
                  Delete
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={post.title}
                description={post.content}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default AdminPanel;