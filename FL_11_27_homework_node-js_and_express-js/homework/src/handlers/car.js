let cars = require("../../db/data");
let car;

getCars = () => {
  return {
    status: 200,
    data: cars
  };
};

getSingleCarById = id => {
  car = cars.find(car => car.id === parseInt(id));

  if (car) {
    return {
      status: 200,
      data: car
    };
  } else {
    return {
      status: 404,
      data: "Car has not been found."
    };
  }
};

createNewCar = (id, brand, model, engine, year) => {
  const newCar = {
    id: id,
    brand: brand,
    model: model,
    engineVolume: engine,
    year: year
  };

  car = cars.find(car => car.id === newCar.id);

  if (car) {
    return {
      status: 409,
      body: {
        message: "Car already exist"
      }
    };
  } else {
    cars.push(newCar);
    return {
      status: 201,
      body: cars
    };
  }
};

updateCar = (id, brand, model, engine, year) => {
  car = cars.find(car => car.id === parseInt(id));
  console.log(car);

  if (car) {
    car.brand = brand;
    car.model = model;
    car.engineVolume = engine;
    car.year = year;

    return {
      status: 200,
      body: car
    };
  } else {
    return {
      status: 404,
      body: "Car has not been found."
    };
  }
};

deleteCarById = id => {
  car = cars.find(car => car.id === Number(id));

  if(car) {
    cars = cars.filter(car => car.id !== Number(id));

    return {
      status: 200,
      body: {
        message: 'The car has been successfully removed',
        car: car
      }
    }
  } else {
    return {
      status: 404,
      body: {
        message: 'Car has not been found'
      }
    }
  }
};

module.exports = {
  getCars: getCars,
  getSingleCarById: getSingleCarById,
  createNewCar: createNewCar,
  updateCar: updateCar,
  deleteCarById: deleteCarById
};
