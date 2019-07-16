
exports.up = function (knex) {
    console.log('creating topics table...');
    return knex.schema.createTable('topics', (topicsTable) => {
        topicsTable.string('slug').primary().references('articles.topic');
        topicsTable.string('descriptions').notNullable();
    });
};

exports.down = function (knex, Promise) {
    console.log('removing topics tables...');
    return knex.schema.dropTable('topics');
};
