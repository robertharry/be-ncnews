const express = require("express");
const app = express();
const apiRouter = require("./routers/apiRouter");
app.use(express.json());

app.use("/api", apiRouter);

app.all('/')

module.exports = app;