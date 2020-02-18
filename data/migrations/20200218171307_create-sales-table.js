exports.up = function(knex) {
  return knex.schema.createTable("sales", col => {
    col.increments();
    col.integer("sold_units").notNullable();
    col.integer("car_id").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists();
};
