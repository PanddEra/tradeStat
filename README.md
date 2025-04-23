# TradeStat 📊

TradeStat is a simple web application for tracking your trading statistics. It allows you to record, view, and manage your trades with a clean interface and stores all data in a secure MySQL database.

# 🔧 Tech Stack

Backend: Java + Spring Boot + MySQL

Frontend: React + Axios

Database: MySQL

# 🚀 Features

View all trades from the database

Submit new trades via a simple form

Store trades with type (LONG/SHORT), entry/exit price, SL/TP, and date

Backend ready for integration with Binance/BingX APIs

# ⚙️ Getting Started

# Backend Setup:

Make sure MySQL is installed and running.

Create the database:

`CREATE DATABASE tradestat;`

Start the Spring Boot application:

`./mvnw spring-boot:run`

Backend will run on: http://localhost:8080

# Frontend Setup

Navigate to the frontend directory:

`cd frontend`

Install the dependencies:

`npm install`

Start the development server:

`npm start`

Open in browser at: http://localhost:3000

# 🛡 Security

No sensitive data is stored on the frontend.

Future plans include full user authentication and secure API access using JWT.

# 📌 Roadmap

Binance/BingX API integration

User login and role management

Advanced stats and charts

CSV/Excel export support

# 📧 Contact

Developer: PandEra
Email: antonovmykola2008@gmail.com

