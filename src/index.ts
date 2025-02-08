import express, { Request, Response } from 'express';
require("dotenv").config();
const app = express();

const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response): Promise<void> => {
    const response = {
        statsCode: 200,
        message: "connected",
        success: true,
        port: port,
        env: process.env.DATA,
        method: req.method,
        path: req.path
    };
    res.status(200).send(response);
})

app.get("/hello-world", async (req: Request, res: Response): Promise<void> => {
    const response = {
        statsCode: 200,
        message: "Hello world",
        success: true,
        port: port,
        env: process.env.DATA,
        method: req.method,
        path: req.path
    };
    res.status(200).send(response);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})