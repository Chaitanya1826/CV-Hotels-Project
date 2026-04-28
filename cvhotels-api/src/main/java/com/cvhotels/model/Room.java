package com.cvhotels.model;

public class Room {
    private int id;
    private String type;
    private double price;
    private String description;

    public Room(int id, String type, double price, String description) {
        this.id = id;
        this.type = type;
        this.price = price;
        this.description = description;
    }

    public int getId() { return id; }
    public String getType() { return type; }
    public double getPrice() { return price; }
    public String getDescription() { return description; }
}