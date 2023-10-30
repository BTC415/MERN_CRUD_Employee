# MERN_CRUD_Employee

This MERN_CRUD operation project is for beginners to get the general knowledge of MERN stack for creating records of employees.

## Tech Stack

-React.js
-Node.js
-Express.js
-Mongodb

## Installation

First, clone the project and open it with Visual Studio Code:

```bash
git clone https://github.com/Topcoder415/MERN_CRUD_Employee.git
cd MERN_CRUD_Employee

```

Then, create a .env file in the root of server folder and configure the following MongoDB_Local environment.
```
MONGODB_LOCAL=mongodb://0.0.0.0:27017/test
```
Go to server dir and install required node_modules.
```
cd server
npm install express mongodb dotenv cors
```

Run server

```
node server.js
```
Then, go to upper dir, client dir and install required node_modules.

```
cd ..
cd client
npm install bootstrap react-router-dom

```

Run the frontend

```
npm start
```
