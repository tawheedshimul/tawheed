import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  margin: 0,
  // height: '450px',
  color: '#fff',
  // lineHeight: '450px', // Adjusted to match the height
  // textAlign: 'center',
  background: '#364d79',
  backgroundSize: 'cover', // Ensure the image covers the entire area
  backgroundPosition: 'center', // Center the image
};

const carouselItems = [
  {
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Web Design',
  },
  {
    image: 'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Mobile App Development',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1683746792467-c6ae33d06c20?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'E-commerce Platform',
  },
  {
    image: 'https://media.istockphoto.com/id/1189378904/vector/mobile-apps-creation-of-a-mobile-application-web-page-created-from-separate-blocks-user.jpg?s=612x612&w=0&k=20&c=HIiI8lu3-_-IhUS-Jj20zw0AS-w1FIKXGn_l4qdHAzQ=',
    text: 'Branding & UI/UX',
  },
];

const MyCarousel = () => (
  <Carousel autoplay autoplaySpeed={3000} arrows infinite={true} pauseOnHover>
    {carouselItems.map((item, index) => (
      <div className='relative' key={index}>
        <div
          className='h-[250px] md:h-[450px]'
          style={{
            ...contentStyle,
            backgroundImage: `url(${item.image})`,
          }}
        >
          <h3 className='absolute right-6 bottom-6 bg-gray-900 p-2 rounded'>{item.text}</h3>
        </div>
      </div>
    ))}
  </Carousel>
);

export default MyCarousel;