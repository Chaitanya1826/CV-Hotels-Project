import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="bg-primary text-white text-center py-5" 
                 style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/about-lobby.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <h1 className="display-3 fw-bold text-white mb-3">Welcome to CV Hotels</h1>
                <p className="lead fs-4 mb-4">Experience unparalleled luxury right in the heart of the city.</p>
                <Link to="/rooms" className="btn btn-warning btn-lg fw-bold px-5 py-3">View Our Rooms</Link>
            </div>

            <div className="container my-5 py-4">
                <div className="row align-items-center mb-5">
                    <div className="col-md-6 pe-md-5">
                        <h2 className="fw-bold text-primary mb-4">World-Class Amenities</h2>
                        <p className="text-muted fs-5">Established in 2026, CV Hotels has been providing world-class hospitality to travelers. Take a dip in our temperature-controlled pool, or relax after a long day.</p>
                        <ul className="fs-5 text-muted">
                            <li className="mb-2">Free High-Speed Wi-Fi</li>
                            <li className="mb-2">Complimentary Premium Breakfast</li>
                            <li className="mb-2">24/7 Room Service</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <img src="/images/pool.jpg" alt="Swimming Pool" className="img-fluid rounded shadow-lg" />
                    </div>
                </div>

                <div className="row align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6">
                        <img src="/images/spa.jpg" alt="Luxury Spa" className="img-fluid rounded shadow-lg" />
                    </div>
                    <div className="col-md-6 ps-md-5 mb-4 mb-md-0">
                        <h2 className="fw-bold text-primary mb-4">Rejuvenate Your Senses</h2>
                        <p className="text-muted fs-5">Step into our award-winning spa and let your stress melt away. We offer traditional and modern therapies tailored to your comfort.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;