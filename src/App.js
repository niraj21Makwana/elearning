import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ConatactPage from './ContactPage';
import CoursesPage from './CoursesPage';
import TeamPage from './TeamPage';
import NavBar from './components/NavBar';
import CasMain from './js-cs/CasMain';

const App = () => {
  useEffect(()=>{
    <CasMain/>
  })
  return ( 
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ConatactPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/team" element={<TeamPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
   );
}
 
export default App;