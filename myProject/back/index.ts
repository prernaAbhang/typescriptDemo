// Import the express in typescript file
import express from "express";

const cors = require("cors");
const createUserApi = require("./resources/users/apis/create-user-api");
const getFordCarsApi = require("./resources/cars/apis/get-ford-cars-api");

// Initialize the express engine
const app: express.Application = express();

// Take a port 9000 for running server.
const port: number = 9000;

app.use(cors());

app.use(express.json());

// Handling '/' Request
app.get("/", (_req, _res) => {
    _res.send("TypeScript With Express");
});

app.get("/get_ford_cars", async (req, res) => {
    const response = await getFordCarsApi.get();
    return res.send(response);
});

app.post("/create_user", async (req, res) => {
    const userData = req.body;
    const response = await createUserApi.create(userData);
    return res.send(response);
});

// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
