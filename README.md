# Note-It

The NoteIt Note Maker App is a web application that allows users to create and manage notes. It is built using the MERN stack, which consists of MongoDB as the database, Express.js as the backend framework, React.js as the frontend library, and Node.js as the runtime environment.

# Features
1. Create new notes with a title and content.
2. View a list of all notes.
3. Edit existing notes.
4. Delete notes.

# Prerequisites
Node.js installed on your machine
MongoDB installed and running locally or a MongoDB Atlas account

# Getting Started
Follow the instructions below to get the NoteIt Note Maker App up and running on your local machine.

## Backend Setup

Clone the repository:
git clone https://github.com/your-username/mern-note-maker-app.git

Navigate to the backend directory:
cd Note-It-master

Install the dependencies:
npm install

Create a .env file in the backend directory and add the following environment variables:
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
Replace <your-mongodb-connection-string> with the connection string for your MongoDB database.

Start the backend server:
npm start
The backend server will start running on http://localhost:5000.

## Frontend Setup

Navigate to the frontend directory:
cd ../client
  
Install the dependencies:
npm install
  
Start the frontend development server:
npm start
The frontend development server will start running on http://localhost:3000.

Open your web browser and visit http://localhost:3000 to access the app.
Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License
The NoteIt Note Maker App is open-source software licensed under the MIT license.
