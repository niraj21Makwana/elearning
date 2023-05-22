import React from 'react';
import CategoriesCourse from './components/CategoriesCourse';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import CommonHeader from './components/CommonHeader';
const CoursesPage = () => {
    return ( 
        <>
            <CommonHeader headingName={"Courses"} page1={"Home"} page2={"Pages"} page3={"Courses"} />
            <CategoriesCourse />
            <Courses />
            {/* <Testimonial /> */}
            <Footer />
        </>
     );
}
 
export default CoursesPage;