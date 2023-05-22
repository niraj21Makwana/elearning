import React from 'react';
import TeamMember from './components/TeamMember';
import Footer from './components/Footer';
import CommonHeader from './components/CommonHeader';

const TeamPage = () => {
    return ( 
        <>
            <CommonHeader headingName={"Our Team"} page1={"Home"} page2={"Pages"} page3={"Team"} />
            <TeamMember />
            <TeamMember />
            <Footer />
        </>
     );
} 


 
export default TeamPage;