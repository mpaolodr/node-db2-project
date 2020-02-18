const router = require("express").Router();

const Cars = require("../models/cars-model.js");

router.get("/", async (req, res) => {
  try {
    const cars = await Cars.get();
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

module.exports = router;
