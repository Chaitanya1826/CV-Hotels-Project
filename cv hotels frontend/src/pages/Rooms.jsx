import React, { useEffect, useState } from 'react';
import { getRooms } from '../services/api';
import RoomCard from '../components/RoomCard';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const data = await getRooms();
                setRooms(data);
                setLoading(false);
            } catch (err) {
                setError("Could not connect to the server. Is Tomcat running?");
                setLoading(false);
            }
        };
        fetchRooms();
    }, []);

    if (loading) return <div className="text-center mt-5"><h3>Loading rooms...</h3></div>;
    if (error) return <div className="alert alert-danger mt-5 text-center">{error}</div>;

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center fw-bold text-primary">Our Available Rooms</h2>
            <div className="row">
                {rooms.map(room => (
                    <div className="col-md-6 col-lg-4 mb-4" key={room.id}>
                        <RoomCard room={room} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Rooms;