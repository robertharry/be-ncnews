
exports.up = function (knex) {
    console.log('creating comments table...');
    return knex.schema.createTable('comments', (commentsTable) => {
        commentsTable.increments('comment_id').primary();
        commentsTable.string('author').notNullable();
        commentsTable.string('article_id').notNullable();
        commentsTable.integer('votes').defaultTo(0);
        commentsTable.timestamps();
        commentsTable.string('body').notNullable();
    });
};

exports.down = function (knex, Promise) {
    console.log('removing comments tables...');
    return knex.schema.dropTable('comments');
};
