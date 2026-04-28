package com.cvhotels.controller;

import com.cvhotels.dao.RoomDAO;
import com.cvhotels.model.Room;
import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

// This sets the URL to http://localhost:8080/rooms
@WebServlet("/rooms")
public class RoomServlet extends HttpServlet {

    private RoomDAO roomDAO = new RoomDAO();
    private Gson gson = new Gson();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Tell React we are sending JSON data
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        // Grab rooms from MySQL
        List<Room> rooms = roomDAO.getAllRooms();

        // Convert Java to JSON and send it!
        String jsonResponse = gson.toJson(rooms);
        response.getWriter().write(jsonResponse);
    }
}