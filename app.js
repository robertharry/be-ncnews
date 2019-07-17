const express = require("express");
const app = express();
const apiRouter = require("./routers/apiRouter");
app.use(express.json());

app.use("/api", apiRouter);

app.all('/*', (req, res, next) => res.status(404).send('Route not found'))

app.use((err, req, res, next) => {
    // console.log(err)
    res.status(404).send({ msg: 'user not found' })
})

module.exports = app;