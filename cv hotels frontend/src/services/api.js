import axios from 'axios';

// The verified magical link to your Tomcat server!
const API_URL = 'http://localhost:8080/api'; 

export const getRooms = async () => {
    try {
        const response = await axios.get(`${API_URL}/rooms`);
        return response.data;
    } catch (error) {
        console.error("Error fetching rooms:", error);
        throw error;
    }
};

export const createBooking = async (bookingData) => {
    try {
        const response = await axios.post(`${API_URL}/bookings`, bookingData);
        return response.data;
    } catch (error) {
        console.error("Error creating booking:", error);
        throw error;
    }
};