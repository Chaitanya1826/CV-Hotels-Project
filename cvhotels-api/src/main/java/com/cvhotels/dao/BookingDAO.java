package com.cvhotels.dao;

import com.cvhotels.model.Booking;
import com.cvhotels.util.DBConnection;
import java.sql.*;

public class BookingDAO {

    public boolean createBooking(Booking b) {
        String sql = "INSERT INTO bookings (room_id, guest_name, guest_email, guest_mobile, check_in, check_out, guests_count, rooms_count, total_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = DBConnection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setInt(1, b.getRoomId());
            ps.setString(2, b.getName());
            ps.setString(3, b.getEmail());
            ps.setString(4, b.getMobile());
            ps.setString(5, b.getCheckIn());
            ps.setString(6, b.getCheckOut());
            ps.setInt(7, b.getGuests());
            ps.setInt(8, b.getRoomsCount());
            ps.setDouble(9, b.getTotalPrice());

            // If rows are affected, it was successful
            return ps.executeUpdate() > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
}