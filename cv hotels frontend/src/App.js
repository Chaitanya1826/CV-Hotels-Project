import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-3" to="/">
            <span className="text-primary">CV</span> HOTELS
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/rooms">Rooms</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <footer className="bg-dark text-white text-center py-4 mt-5">
        <div className="container">
          <h5 className="fw-bold">CV HOTELS</h5>
          <p className="small text-muted">Premium hospitality at the heart of the city.</p>
          <hr className="bg-secondary" />
          <p className="mb-0">&copy; 2026 CV Hotels. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  );
}
export default App;