const db = require("../data/db.config.js");

function get() {
  return db("cars");
}

function getById(id) {
  return db("cars")
    .where({ VIN: id })
    .first();
}

function insert(carData) {
  return db("cars")
    .insert(carData)
    .then(car => {
      return getById(car[0]);
    });
}

function update(carData, id) {
  return db("cars")
    .where({ VIN: id })
    .update(carData)
    .then(updated => {
      return getById(id);
    });
}

function remove(id) {
  return db("cars")
    .where({ VIN: id })
    .then(car => {
      return db("cars")
        .where({ VIN: id })
        .del()
        .then(deleted => {
          return car;
        });
    });
}

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
};
