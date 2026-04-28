# CV Hotels 🏨

> A comprehensive hotel reservation web application built with React.js, Java Servlets, Apache Tomcat, and MySQL, demonstrating seamless client-server architecture and dynamic pricing.

This project simulates a real-world hotel booking system. It utilizes a decoupled architecture, separating a highly responsive Single-Page Application (SPA) frontend from a robust, secure Java REST API backend.

## ✨ Key Features
* **Dynamic Room Catalog:** Asynchronously fetches and displays available rooms, pricing, and descriptions directly from the database without page reloads.
* **Smart Booking Engine:** Automatically calculates total pricing based on selected check-in/check-out dates, guest count, room quantities, and applied taxes.
* **Pay-at-Hotel Workflow:** Captures user reservation data securely and persists it for administrative record-keeping.
* **RESTful Architecture:** Implements strict CORS policies and JSON serialization/deserialization for secure client-server communication.

## 💻 Technology Stack
### Frontend (Client)
* **Framework:** React.js
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Styling:** CSS3 / Modular Styles

### Backend (Server)
* **Language:** Java (JDK 11+)
* **API Architecture:** Java Servlets
* **Web Server:** Apache Tomcat 9
* **Data Serialization:** Google Gson (JSON)

### Database
* **RDBMS:** MySQL 8.0
* **Connectivity:** JDBC (Java Database Connectivity)

---

## 📂 Project Structure
This repository uses a monorepo structure containing both the client and server environments.

```text
CV-Hotels-Project/
├── frontend/               # React.js application
│   ├── public/
│   ├── src/                # React components and API fetch logic
│   └── package.json
│
├── backend/                # Java Servlets & Tomcat environment
│   ├── src/main/java/      # DAO, Models, and Servlet controllers
│   ├── web/                # WEB-INF and web.xml
│   └── pom.xml             # Maven dependencies (Gson, MySQL Connector)
│
├── .gitignore
└── README.md