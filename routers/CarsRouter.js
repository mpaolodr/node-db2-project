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

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const car = await Cars.getById(id);

    if (car) {
      res.status(200).json(car);
    } else {
      res.status(400).json({ errorMessage: "Car not found" });
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

router.post("/", async (req, res) => {
  const carData = req.body;

  if (carData.make && carData.model && carData.mileage) {
    try {
      const newCar = await Cars.insert(carData);
      res.status(201).json(newCar);
    } catch (err) {
      res.status(500).json({ errorMessage: err.message });
    }
  } else {
    res.status(400).json({ erorrMessage: "Please fill out required fields" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const carData = req.body;

  if (carData.make && carData.model && carData.mileage) {
    try {
      const newValue = await Cars.update(carData, id);
      if (newValue) {
        res.status(200).json(newValue);
      } else {
        res.status(400).json({ errorMessage: "Invalid Id" });
      }
    } catch (err) {
      res.status(500).json({ errorMessage: err.message });
    }
  } else {
    res.status(500).json({ errorMessage: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Cars.remove(id);
    res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

module.exports = router;
