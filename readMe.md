
# Uber Clone  

A full-stack Uber clone application featuring real-time functionality for **Users** and **Captains**. This project is designed to demonstrate a scalable architecture, efficient APIs, and an interactive UI for ride-sharing applications.  

## Features  

### User Functionality  
- **Authentication**: Secure signup and login.  
- **Ride Booking**: Request rides with pickup and drop-off locations.  
- **Live Tracking**: Track captain’s real-time location during the ride.  
- **Payment**: Mock payment system for ride completion.  
- **Ride History**: View past trips.  

### Captain Functionality  
- **Authentication**: Secure captain login and profile management.  
- **Trip Requests**: Receive and manage ride requests.  
- **Live Location Sharing**: Share location with users during rides.  
- **Earnings Management**: View completed rides and earnings.  

## Tech Stack  

### Frontend  
- **Framework**: React.js 
- **UI**: TailwindCSS  

### Backend  
- **Framework**: Node.js (Express.js)  
- **Database**:  MongoDB  
- **Real-Time Communication**: WebSockets (Socket.io)  
- **Authentication**: JSON Web Tokens (JWT)  

### DevOps  
- **Containerization**:  *work in progress*
- **Deployment**:  *work in progress*

## Installation  

### Prerequisites  
- Node.js (v18+)  
- Docker (optional for containerized setup)  

### Steps  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/arunydvv/uber.git  
   cd uber