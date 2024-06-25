import 'dotenv/config';
import express, { json, urlencoded } from "express";
import cors from "cors";
import db from "./app/models/index.js";  // Ensure this import is correct
import userRoutes from './app/routes/user.route.js';  // Ensure this import is correct

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

// Sync all the models with the database 
db.sequelizeConnection.sync(({ alter: true })).then(() => {
    console.log("Synced database.");
}).catch(err => {
    console.log("Failed to sync database: " + err.message);
});

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
});

// use user routes
app.use('/api/users', userRoutes);

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
