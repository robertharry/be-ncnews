
exports.up = function (knex) {
    console.log('creating comments table...');
    return knex.schema.createTable('comments', (commentsTable) => {
        commentsTable.increments('comment_id').primary();
        commentsTable.string('author');
        commentsTable.foreign('author').references('users.username');
        commentsTable.integer('article_id')
        commentsTable.foreign('article_id').references('articles.article_id');
        commentsTable.integer('votes').defaultTo(0);
        commentsTable.timestamps('created_at');
        commentsTable.text('body').notNullable();
    });
};

exports.down = function (knex, Promise) {
    console.log('removing comments tables...');
    return knex.schema.dropTable('comments');
};