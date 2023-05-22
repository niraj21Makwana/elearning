import React from 'react';
import CategoriesCourse from './components/CategoriesCourse';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Courses from './components/Courses';
import Footer from './components/Footer';
import TeamMember from './components/TeamMember';
import Testimonial from './components/Testimonial';
import Header from './components/Header';

const HomePage = () => {
    return ( 
        <>
        <Header/>
            <h1>homePage</h1>
            <Services />
            <AboutUs />
            <CategoriesCourse />
            <Courses />
            <TeamMember />
            {/* <Testimonial /> */}
            <Footer />
        </>
     );
}
 
export default HomePage;