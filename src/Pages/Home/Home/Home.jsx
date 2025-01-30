import React from 'react';

import SkillsGrid from '../SkillGrid/SkillGrid';
import ContactPage from '../../Contact/ContactPage';
import MyCarousel from '../Carousel/MyCarousel';

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