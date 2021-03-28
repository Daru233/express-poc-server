import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "config";
import { getProfiles, createProfile } from "./src/controllers/Profile.js";

const MONGO_URL = config.get("App.MongoDB.connectionString");
mongoose
    .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const app = Express();
        const port = 8080;

        app.use(cors());
        app.use(Express.json());
        app.use(Express.urlencoded({ extended: true }));

        app.post("/", createProfile);

        app.get("/", getProfiles);

        app.listen(port, () =>
            console.log(
                `Connection to mongodb: Success. Server started on ${port}`
            )
        );
    })
    .catch((error) => {
        console.log("Could not connect to mongodb: " + error);
    });
