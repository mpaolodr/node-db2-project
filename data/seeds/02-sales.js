exports.seed = function(knex) {
  // Inserts seed entries
  return knex("sales").insert([
    { sold_units: 27, car_id: 1 },
    { sold_units: 2, car_id: 2 },
    { sold_units: 0, car_id: 3 }
  ]);
};
