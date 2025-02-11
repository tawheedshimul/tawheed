import React from 'react';

import SkillsGrid from '../SkillGrid/SkillGrid';
import MyCarousel from '../Carousel/MyCarousel';
import Project from '../Project/Project';
import Subscribe from '../Subscribe/Subscribe';


const Home = () => {
    return (
        <div>
            <MyCarousel />
            <SkillsGrid />
            <Project />
            <Subscribe />

        </div>
    );
};

export default Home;