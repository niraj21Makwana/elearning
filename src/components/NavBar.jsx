import React from 'react';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return ( <>
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <NavLink to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary"><LibraryBooksIcon /> eLEARNING</h2>
        </NavLink>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                <NavLink to="/courses" className="nav-item nav-link">Courses</NavLink>
                <div className="nav-item dropdown">
                    <NavLink to="" className="nav-link" data-bs-toggle="dropdown">Pages <ArrowDropDownSharpIcon sx={{fontSize : "25px" ,textAlign : "Center", justifyContent:"center" }}/></NavLink>
                    <div className="dropdown-menu m-0">
                        <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                        <NavLink to="testimonial" className="dropdown-item">Testimonial</NavLink>
                        <NavLink to="404" className="dropdown-item">404 Page</NavLink>
                    </div>
                </div>
                <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
            </div>
            <NavLink to="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now <ArrowRightAltIcon sx={{ fontSize : "25px"}}/></NavLink>
        </div>
    </nav>

    </> );
}
 
export default NavBar;