exports.seed = function(knex) {
  // Inserts seed entries
  return knex("cars").insert([
    {
      VIN: 1,
      make: "Toyota",
      model: "Tacoma",
      mileage: 10000,
      transmissionType: null,
      statusOfTitle: null
    },
    {
      VIN: 2,
      make: "Ferrari",
      model: "458 Italia",
      mileage: 0,
      transmissionType: "Manual",
      statusOfTitle: null
    },
    {
      VIN: 3,
      make: "Porsche",
      model: "Carrera GT",
      mileage: 0,
      transmissionType: "Manual",
      statusOfTitle: null
    }
  ]);
};
