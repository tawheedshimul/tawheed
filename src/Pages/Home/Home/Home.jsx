import React from 'react';

import SkillsGrid from '../SkillGrid/SkillGrid';
import MyCarousel from '../Carousel/MyCarousel';

const Home = () => {
    return (
        <div>
            <MyCarousel />
            <SkillsGrid />
            
        </div>
    );
};

export default Home;