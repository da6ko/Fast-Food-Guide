# Fast Food Ratings Map

This project provides a web map to display fast-food ratings based on user feedback. It includes a front-end component (HTML, JavaScript with Mapbox) and a back-end component (Node.js with Express, MongoDB for storage). The reviews can be created using the [feedback form app](https://github.com/da6ko/Fast-Food-Guide-Client).

## Getting Started

You'll need:
- **Mapbox Account -**  Obtain a Mapbox access token and replace 'YOUR_MAPBOXGL_TOKEN' in renderMap.js with your actual token.
- **Node.js -** Make sure you have Node.js installed.
- **MongoDB -** Install MongoDB and replace 'YOUR_DATABASE_URI/DATABASE_NAME' in server.js with your actual MongoDB URI and database name.

Installing
1. Clone the repository:
```bash
git clone https://github.com/your-username/your-repository.git
```

2. Install dependencies:
```bash
cd your-repository
npm install
```

3. Start the server:
```bash
node server.js
```
The server will be running at http://localhost:8080.

4. Open index.html in a web browser to view the map.
 
## Usage

The web map displays fast-food ratings as markers on the map. Ratings are fetched from the backend API (/api/get-feedback) and displayed on the map. Clicking on a marker reveals additional information about the fast-food place.

## Technologies Used
Frontend:

- HTML, JavaScript
- Mapbox - Mapbox GL JS for interactive maps

Backend:

- Node.js - JavaScript runtime
- Express.js - Web application framework for Node.js
- MongoDB - NoSQL database for storing feedback data
- Mongoose - MongoDB object modeling for Node.js

## Backend API

- GET /api/get-feedback: Fetches all feedback data from the MongoDB database.
