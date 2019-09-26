const express = require('express');
const router = express.Router();
const cars = require('../db/data.json');

router.get('/', (req, res) => res.json(cars));

router.get('/:id', (req, res) => {
  const found = cars.some(car => car.id === parseInt(req.params.id));

  if (found) {
    res.json(cars.filter(car => car.id === parseInt(req.params.id)));
  } else {
    res.status(404).json({ msg: "Car is not found" });
  }
  
});

module.exports = router;