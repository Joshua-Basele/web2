import express from "express";
import filmRouter from "./routes/films";
import textRouter from "./routes/texts";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/films", filmRouter);
app.use("/texts", textRouter);


export default app;
