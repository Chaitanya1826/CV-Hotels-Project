package com.cvhotels.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
    // IMPORTANT: If your MySQL password is not "root", change it here!
    private static final String URL = "jdbc:mysql://localhost:3306/cvhotels";
    private static final String USER = "root";
    private static final String PASSWORD = "1826";

    public static Connection getConnection() throws SQLException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            return DriverManager.getConnection(URL, USER, PASSWORD);
        } catch (ClassNotFoundException e) {
            throw new SQLException("MySQL Driver not found! Check pom.xml");
        }
    }
}