import React from 'react';

const Gallery = () => {
    const galleryImages = [
        { src: '/images/about-lobby.jpg', title: 'Grand Lobby' },
        { src: '/images/pool.jpg', title: 'Temperature Controlled Pool' },
        { src: '/images/spa.jpg', title: 'Luxury Spa' },
        { src: '/images/suite.jpg', title: 'Executive Suite' },
        { src: '/images/family.jpg', title: 'Family Room' },
        { src: '/images/double.jpg', title: 'Double Room' }
    ];

    return (
        <div className="container mt-5 py-4">
            <div className="text-center mb-5">
                <h2 className="display-5 fw-bold text-primary">Photo Gallery</h2>
                <div className="mx-auto bg-primary" style={{ height: '3px', width: '80px' }}></div>
            </div>
            <div className="row g-4">
                {galleryImages.map((image, index) => (
                    <div className="col-md-6 col-lg-4" key={index}>
                        <div className="card border-0 shadow-sm h-100 overflow-hidden">
                            <img src={image.src} className="card-img-top custom-zoom" alt={image.title} style={{ height: '250px', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                            <div className="card-body bg-light text-center">
                                <h5 className="card-title fw-bold mb-0">{image.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <style>{`.custom-zoom:hover { transform: scale(1.05); }`}</style>
        </div>
    );
};
export default Gallery;