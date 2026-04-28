package com.cvhotels.model;

public class Booking {
    private int roomId;
    private String name;
    private String email;
    private String mobile;
    private String checkIn;
    private String checkOut;
    private int guests;
    private int roomsCount;
    private double totalPrice;

    public Booking() {} // Empty constructor needed for Gson

    public int getRoomId() { return roomId; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getMobile() { return mobile; }
    public String getCheckIn() { return checkIn; }
    public String getCheckOut() { return checkOut; }
    public int getGuests() { return guests; }
    public int getRoomsCount() { return roomsCount; }
    public double getTotalPrice() { return totalPrice; }
}