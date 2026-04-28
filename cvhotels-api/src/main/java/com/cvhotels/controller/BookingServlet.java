package com.cvhotels.controller;

import com.cvhotels.dao.BookingDAO;
import com.cvhotels.model.Booking;
import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

// This sets the URL to http://localhost:8080/bookings
@WebServlet("/bookings")
public class BookingServlet extends HttpServlet {

    private BookingDAO bookingDAO = new BookingDAO();
    private Gson gson = new Gson();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        try {
            // Read the JSON data coming from React
            BufferedReader reader = req.getReader();
            Booking newBooking = gson.fromJson(reader, Booking.class);

            // Save it to MySQL
            boolean isSaved = bookingDAO.createBooking(newBooking);

            // Send success or error message back to React
            if (isSaved) {
                resp.setStatus(HttpServletResponse.SC_CREATED);
                resp.getWriter().write("{\"status\": \"success\", \"message\": \"Booking Confirmed!\"}");
            } else {
                resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                resp.getWriter().write("{\"status\": \"error\", \"message\": \"Database failed to save.\"}");
            }
        } catch (Exception e) {
            e.printStackTrace();
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            resp.getWriter().write("{\"status\": \"error\", \"message\": \"Invalid data format.\"}");
        }
    }
}