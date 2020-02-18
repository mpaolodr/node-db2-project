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

module.exports = {
  get,
  getById,
  insert
};
