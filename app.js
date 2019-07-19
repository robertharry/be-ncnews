const express = require("express");
const app = express();
const apiRouter = require("./routers/apiRouter");
app.use(express.json());

app.use("/api", apiRouter);

app.all('/*', (req, res, next) => res.status(404).send({ msg: 'Route not found' }))

app.use((err, req, res, next) => {
    console.log('got to app error')
    res.status(404).send({ msg: 'user not found' })
})

module.exports = app;