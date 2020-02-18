exports.up = function(knex) {
  return knex.schema.createTable("cars", col => {
    //   for VIN
    col.increments("VIN");

    // make- required - string
    col
      .text("make", 128)
      .notNullable()
      .index();

    // model - required - string
    col.text("model", 128).notNullable();

    // mileage - required - integer
    col.integer("mileage").notNullable();

    // transmissionType - not required - string
    col.text("transmissionType");

    // statusOfTitle - not required - string
    col.text("statusOfTitle");
  });
};

exports.down = function(knex) {
  return knex.schema.dropIfTableExists("cars");
};
