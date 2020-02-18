const express = require("express");

const CarsRouter = require("../routers/CarsRouter.js");

const server = express();

server.use(express.json());
server.use("/api/cars", CarsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "is live" });
});

module.exports = server;
