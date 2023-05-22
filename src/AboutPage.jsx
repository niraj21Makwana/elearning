import React from 'react';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Footer from './components/Footer';
import TeamMember from './components/TeamMember';
import CommonHeader from './components/CommonHeader';

const AboutPage = () => {
    return ( 
        <>
        <CommonHeader headingName={"About Us"} page1={"Home"} page2={"Pages"} page3={"About"} />
            <Services />
            <AboutUs />
            <TeamMember />
            <Footer />
        </>
     );
}
 
export default AboutPage;