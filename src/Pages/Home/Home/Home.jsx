import React from 'react';
import HeroSection from '../Hero/Hero';
import ContactPage from '../Hero/ContactPage';
import MyCarousel from '../Carousel/MyCarousel';
import SkillsGrid from '../SkillGrid/SkillGrid';

const Home = () => {
    return (
        <div>
            <MyCarousel />
            <SkillsGrid />
            <ContactPage />
        </div>
    );
};

export default Home;