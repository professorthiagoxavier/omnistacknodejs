
exports.up = function(knex) {
    return knex.schema.createTable('address', function (table) {
        table.increments();
        table.string('rua').notNullable();
        table.integer('numero').notNullable();

        table.string('clientID').notNullable();

        //table.foreign('clientID').references('id').inTable('cliente');
    })
};

exports.down = function(knex) {
    return  knex.schema.dropTable('address');
};
