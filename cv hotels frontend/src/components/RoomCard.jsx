import React, { useState, useEffect } from 'react';
import { createBooking } from '../services/api';

const RoomCard = ({ room }) => {
    const [showModal, setShowModal] = useState(false);
    const [bookingData, setBookingData] = useState({ name: '', email: '', mobile: '', checkIn: '', checkOut: '', guests: 1, roomsCount: 1 });
    const [pricing, setPricing] = useState({ nights: 0, baseTotal: 0, gst: 0, grandTotal: 0 });

    useEffect(() => {
        if (bookingData.checkIn && bookingData.checkOut && bookingData.roomsCount > 0) {
            const start = new Date(bookingData.checkIn);
            const end = new Date(bookingData.checkOut);
            const timeDiff = end.getTime() - start.getTime();
            const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
            
            if (nights > 0) {
                const baseTotal = nights * room.price * bookingData.roomsCount;
                const gst = baseTotal * 0.18;
                const grandTotal = baseTotal + gst;
                setPricing({ nights, baseTotal, gst, grandTotal });
            } else {
                setPricing({ nights: 0, baseTotal: 0, gst: 0, grandTotal: 0 });
            }
        } else {
            setPricing({ nights: 0, baseTotal: 0, gst: 0, grandTotal: 0 });
        }
    }, [bookingData.checkIn, bookingData.checkOut, bookingData.roomsCount, room.price]);

    const getRoomImage = (roomType) => {
        if (!roomType) return '/images/single.jpg'; 
        const type = roomType.toUpperCase();
        if (type.includes('SINGLE')) return '/images/single.jpg';
        if (type.includes('DOUBLE')) return '/images/double.jpg';
        if (type.includes('FAMILY')) return '/images/family.jpg';
        if (type.includes('EXECUTIVE') || type.includes('SUITE')) return '/images/suite.jpg';
        return '/images/single.jpg'; 
    };

    const handleBooking = async (e) => {
        e.preventDefault();
        if (pricing.nights <= 0) { alert("Please select a valid Check-Out date."); return; }

        const finalBookingData = {
            roomId: room.id,
            name: bookingData.name,
            email: bookingData.email,
            mobile: bookingData.mobile,
            checkIn: bookingData.checkIn,
            checkOut: bookingData.checkOut,
            guests: bookingData.guests,
            roomsCount: bookingData.roomsCount,
            totalPrice: pricing.grandTotal
        };

        try {
            await createBooking(finalBookingData);
            alert(`🎉 Success, ${bookingData.name}! Your booking for the ${room.type} is confirmed.\nGrand Total: ₹${pricing.grandTotal.toLocaleString('en-IN')}`);
            setShowModal(false);
        } catch (error) {
            alert("❌ Oops! Something went wrong while saving your booking. Is Tomcat running?");
        }
    };

    return (
        <div className="card h-100 shadow-sm border-0">
            <img src={getRoomImage(room.type)} className="card-img-top" alt={room.type} style={{height: '220px', objectFit: 'cover'}} />
            <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="card-title text-primary mb-0 fw-bold">{room.type}</h4>
                    <span className="badge bg-success">Available</span>
                </div>
                <p className="card-text text-muted small">{room.description}</p>
                <div className="mt-auto">
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <span className="fs-4 fw-bold text-dark">₹{room.price.toLocaleString('en-IN')}</span>
                            <span className="text-muted small"> / night</span>
                        </div>
                    </div>
                    <button onClick={() => setShowModal(true)} className="btn btn-primary w-100 fw-bold py-2">Book This Room</button>
                </div>
            </div>

            {showModal && (
                <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 2000, overflowY: 'auto'}}>
                    <div className="bg-white p-4 rounded shadow-lg w-100 my-4" style={{maxWidth: '600px'}}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h3 className="mb-0 fw-bold text-primary">Reserve {room.type}</h3>
                            <button className="btn-close" onClick={() => setShowModal(false)}></button>
                        </div>
                        <form onSubmit={handleBooking}>
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3 mb-md-0"><input type="text" placeholder="Full Name" className="form-control" required onChange={(e) => setBookingData({...bookingData, name: e.target.value})} /></div>
                                <div className="col-md-6"><input type="tel" placeholder="Mobile Number" className="form-control" required onChange={(e) => setBookingData({...bookingData, mobile: e.target.value})} /></div>
                            </div>
                            <div className="mb-3"><input type="email" placeholder="Email Address" className="form-control" required onChange={(e) => setBookingData({...bookingData, email: e.target.value})} /></div>
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3 mb-md-0"><label className="small fw-bold text-muted mb-1">Check-In Date</label><input type="date" className="form-control" required onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})} /></div>
                                <div className="col-md-6"><label className="small fw-bold text-muted mb-1">Check-Out Date</label><input type="date" className="form-control" required onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})} /></div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-6 mb-3 mb-md-0"><label className="small fw-bold text-muted mb-1">No. of Rooms</label><input type="number" min="1" className="form-control" value={bookingData.roomsCount} required onChange={(e) => setBookingData({...bookingData, roomsCount: parseInt(e.target.value) || 1})} /></div>
                                <div className="col-md-6"><label className="small fw-bold text-muted mb-1">Total Guests</label><input type="number" min="1" className="form-control" value={bookingData.guests} required onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value) || 1})} /></div>
                            </div>
                            <div className="bg-light p-3 rounded mb-4 border">
                                <h6 className="fw-bold mb-3 border-bottom pb-2">Price Summary</h6>
                                <div className="d-flex justify-content-between mb-2 small"><span>₹{room.price.toLocaleString('en-IN')} x {bookingData.roomsCount} room(s) x {pricing.nights} night(s)</span><span>₹{pricing.baseTotal.toLocaleString('en-IN')}</span></div>
                                <div className="d-flex justify-content-between mb-2 small text-muted"><span>GST (18%)</span><span>₹{pricing.gst.toLocaleString('en-IN')}</span></div>
                                <hr className="my-2" />
                                <div className="d-flex justify-content-between fw-bold fs-5 text-success"><span>Grand Total</span><span>₹{pricing.grandTotal.toLocaleString('en-IN')}</span></div>
                            </div>
                            <button type="submit" className="btn btn-success w-100 py-3 fw-bold text-uppercase fs-5" disabled={pricing.nights <= 0}>{pricing.nights > 0 ? `Pay ₹${pricing.grandTotal.toLocaleString('en-IN')} & Book` : 'Select Valid Dates'}</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
export default RoomCard;