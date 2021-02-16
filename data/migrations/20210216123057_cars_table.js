exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
    table.increments()
    table.text("make", 128).notNullable()
    table.text("model", 128).notNullable()
    table.text("transmission", 128).notNullable()
    table.int("mileage", 128).notNullable()
    table.int("VIN", 128).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars")
};
