import React from 'react';
import CommonHeader from './components/CommonHeader';
import Contact from './components/Contact';
import Footer from './components/Footer';

const ConatactPage = () => {
    return ( 
    <>
       <CommonHeader headingName={"Contact Us"} page1={"Home"} page2={"Pages"} page3={"Contact"} />
       <Contact />
       <Footer />
     </>
     );
}
 
export default ConatactPage;