import React from 'react';
import Course1 from '../img/course-1.jpg'
import Course2 from '../img/course-2.jpg'
import Course3 from '../img/course-3.jpg'
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import GroupsIcon from '@mui/icons-material/Groups';

const Courses = () => {
    return ( 
        <>
        
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                <h1 className="mb-5">Popular Courses</h1>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="course-item bg-light">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src={Course1} alt="" />
                            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                            </div>
                        </div>
                        <div className="text-center p-4 pb-0">
                            <h3 className="mb-0">$149.00</h3>
                            <div className="mb-3">
                            <StarIcon className="text-primary" />
                            <StarIcon className="text-primary" />
                            <StarIcon className="text-primary" />
                            <StarIcon className="text-primary" />
                                <small>(123)</small>
                            </div>
                            <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
                        </div>
                        <div className="d-flex border-top">
                            <small className="flex-fill text-center border-end py-2"><PersonIcon className="text-primary me-2"/>John Doe</small>
                            <small className="flex-fill text-center border-end py-2"><WatchLaterIcon className="text-primary me-2"/>1.49 Hrs</small>
                            <small className="flex-fill text-center py-2"><GroupsIcon className="text-primary me-2" />30 Students</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="course-item bg-light">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src={Course2} alt="" />
                            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{borderRadius: "0 30px 30px 0" }}>Join Now</a>
                            </div>
                        </div>
                        <div className="text-center p-4 pb-0">
                            <h3 className="mb-0">$149.00</h3>
                            <div className="mb-3">
                            <StarIcon className="text-primary" />
                            <StarIcon className="text-primary" />
                            <StarIcon className="text-primary" />
                            <StarIcon className="text-primary" />
                                <small>(123)</small>
                            </div>
                            <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
                        </div>
                        <div className="d-flex border-top">
                            <small className="flex-fill text-center border-end py-2"><PersonIcon className="text-primary me-2"/>John Doe</small>
                            <small className="flex-fill text-center border-end py-2"><WatchLaterIcon className="text-primary me-2"/>1.49 Hrs</small>
                            <small className="flex-fill text-center py-2"><GroupsIcon className="text-primary me-2" />30 Students</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="course-item bg-light">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src={Course3} alt="" />
                            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                            </div>
                        </div>
                        <div className="text-center p-4 pb-0">
                            <h3 className="mb-0">$149.00</h3>
                            <div className="mb-3">
                            <StarIcon className="text-primary" />
                            <StarIcon className="text-primary" />
                            <StarIcon className="text-primary" />
                            <StarIcon className="text-primary" />
                                <small>(123)</small>
                            </div>
                            <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
                        </div>
                        <div className="d-flex border-top">
                            <small className="flex-fill text-center border-end py-2"><PersonIcon className="text-primary me-2"/>John Doe</small>
                            <small className="flex-fill text-center border-end py-2"><WatchLaterIcon className="text-primary me-2"/>1.49 Hrs</small>
                            <small className="flex-fill text-center py-2"><GroupsIcon className="text-primary me-2" />30 Students</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        </>
     );
}
 
export default Courses;