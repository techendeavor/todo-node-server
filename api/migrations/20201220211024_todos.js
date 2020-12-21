
exports.up = async knex => {
  await knex.schema.createTable('todos', tbl => {
    tbl.increments();
    tbl.text('message', 256).notNullable();
  });
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists('todos');
};
