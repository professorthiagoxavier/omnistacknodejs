
exports.up = function (knex) {
   return knex.schema.createTable('cliente', function (table) {
        table.string('id').primary();
        table.string('usuario').notNullable();
        table.string('senha').notNullable();
    })
};

//caso precise voltar atrás
exports.down = function (knex) {
  return  knex.schema.dropTable('cliente');
};
