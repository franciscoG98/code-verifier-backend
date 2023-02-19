import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

// Configuration the .env file
dotenv.config();

// Create Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        data: {
            message: "Goodbye, world"
        }
    })
});

app.get("/hello", (req: Request, res: Response) => {
    const name = req.query.name || "anonimo";
    res.status(200).json({
        data: {
            message: `Hello, ${name}`,
        }
    })
});    

// Execute APP and listen request to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});
