import React from 'react';
import testimonial1 from '../img/testimonial-1.jpg'
import testimonial2 from '../img/testimonial-2.jpg'
import  testimonial3 from '../img/testimonial-3.jpg'
import testimonial4 from '../img/testimonial-4.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {

    const options = {
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    }

    return ( 
        <>


    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="text-center">
                <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                <h1 className="mb-5">Our Students Say!</h1>
            </div>
            <OwlCarousel className="owl-carousel testimonial-carousel position-relative" {...options}>
                <div className="testimonial-item text-center">
                    <img className="border rounded-circle p-2 mx-auto mb-3" src={testimonial1} style={{width: "80px" ,height: "80px" }} />
                    <h5 className="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="border rounded-circle p-2 mx-auto mb-3" src={testimonial2} style={{width: "80px" ,height: "80px" }} />
                    <h5 className="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="border rounded-circle p-2 mx-auto mb-3" src={testimonial3} style={{width: "80px" ,height: "80px" }} />
                    <h5 className="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="border rounded-circle p-2 mx-auto mb-3" src={testimonial4} style={{width: "80px" ,height: "80px" }} />
                    <h5 className="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    </div>
        </>
     );
}
 
export default Testimonial;