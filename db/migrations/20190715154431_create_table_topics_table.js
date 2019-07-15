
exports.up = function (knex) {
    console.log('creating topics table...');
    return knex.schema.createTable('topics', (topicsTable) => {
        topicsTable.string('slug').notNullable();
        topicsTable.string('descriptions').notNullable();
    });
};

exports.down = function(knex) {
  
};
