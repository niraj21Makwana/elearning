import React from 'react';
import { NavLink } from 'react-router-dom';
import coures1 from '../img/course-1.jpg'
import coures2 from '../img/course-2.jpg'
import coures3 from '../img/course-3.jpg'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return ( 
        <>
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Quick Link</h4>
                    <NavLink className="btn btn-link" to="">About Us</NavLink>
                    <NavLink className="btn btn-link" to="">Contact Us</NavLink>
                    <NavLink className="btn btn-link" to="">Privacy Policy</NavLink>
                    <NavLink className="btn btn-link" to="">Terms & Condition</NavLink>
                    <NavLink className="btn btn-link" to="">FAQs & Help</NavLink>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Contact</h4>
                    <p className="mb-2"><LocationOnIcon className="me-3" />123 Street, New York, USA</p>
                    <p className="mb-2"><PhoneIcon className="me-3"/>+012 345 67890</p>
                    <p className="mb-2"><EmailIcon className="me-3"/>info@example.com</p>
                    <div className="d-flex pt-2">
                        <NavLink className="btn btn-social" to=""><TwitterIcon /></NavLink>
                        <NavLink className="btn btn-social" to=""><FacebookIcon /></NavLink>
                        <NavLink className="btn btn-social" to=""><YouTubeIcon /></NavLink>
                        <NavLink className="btn btn-social" to=""><LinkedInIcon /></NavLink>
                        {/* btn-outline-light  */}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Gallery</h4>
                    <div className="row g-2 pt-2">
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={coures1} alt="" />
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={coures3} alt="" />
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={coures2} alt="" />
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={coures3} alt="" />
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={coures2} alt="" />
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src={coures1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                        <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.

                {/* /*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a> */}
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="footer-menu">
                            <NavLink to="">Home</NavLink>
                            <NavLink to="">Cookies</NavLink>
                            <NavLink to="">Help</NavLink>
                            <NavLink to="">FQAs</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}
 
export default Footer;