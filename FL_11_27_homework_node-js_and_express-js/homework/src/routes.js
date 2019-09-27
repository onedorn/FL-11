const express = require('express');
const router = express.Router();
const handler = require('./handlers/car.js');
const del = require('./middlewares/delete-authorization');

let result;

// Get all cars
router.get('/', (req, res) => {
  result = handler.getCars();
  res.status(result.status).send(result.data);
});

// Get single car
router.get('/:id', (req, res) => {
  result = handler.getSingleCarById(req.params.id);
  res.status(result.status).send(result.data);
});

// Create car
router.post('/', (req, res) => {
  result = handler.createNewCar(
    req.body.id,
    req.body.brand,
    req.body.model,
    req.body.engineVolume,
    req.body.year
  );
  res.status(result.status).send(result.body);
});

// Update car
router.put('/:id', (req, res) => {
  result = handler.updateCar(
    req.body.id,
    req.body.brand,
    req.body.model,
    req.body.engineVolume,
    req.body.year
  );
  res.status(result.status).send(result.body);
});

// Authorization
router.use('/:id', (req, res, next) => {
  result = del.check(req.headers.authorization);
  if (result) {
    next();
  } else {
    res.status(401).send('Sign in');
  }
});

// Delete car
router.delete('/:id', (req, res) => {
  result = handler.deleteCarById(req.params.id);
  res.status(result.status).send(result.body);
});


module.exports = router;
