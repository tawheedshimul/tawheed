import React from 'react';

import SkillsGrid from '../SkillGrid/SkillGrid';
import MyCarousel from '../Carousel/MyCarousel';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
            <MyCarousel />
            <SkillsGrid />
            <Project />

        </div>
    );
};

export default Home;