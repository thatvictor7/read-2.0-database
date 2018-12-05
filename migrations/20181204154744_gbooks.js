
exports.up = function(knex, Promise) {
  //code to set up tables
  //create schema

  //setup for a schema
  return knex.schema.createTable('gBooks', function (table) {
      table.increments()
      table.string('Book Title')
      table.string('Book Genre')
      table.string('Book Description', 500)
      table.string('Book cover URL', 270)
    //   table.string('Author 1 First Name')
    //   table.string('Author 1 Last Name')
    //   table.string('Author 1 Biography')
    //   table.string('Author 1 Portrait URL')
    //   table.string('Author 2 First Name')
    //   table.string('Author 2 Last Name')
    //   table.string('Author 2 Biography')
    //   table.string('Author 2 Portrait URL')
    //   table.string('Author 3 First Name')
    //   table.string('Author 3 Last Name')
    //   table.string('Author 3 Biography')
    //   table.string('Author 3 Portrait URL')
  })
};

exports.down = function(knex, Promise) {
  //code to remove tables and restart
  return knex.schema.dropTableIfExists('gBooks')
};
