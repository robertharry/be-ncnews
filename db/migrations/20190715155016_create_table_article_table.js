

exports.up = function (knex) {
    console.log('creating articles table...');
    return knex.schema.createTable('articles', (articlesTable) => {
        articlesTable.increments('article_id').primary();
        articlesTable.string('title').notNullable();
        articlesTable.text('body').notNullable();
        articlesTable.integer('votes').defaultTo(0);
        articlesTable.string('topic')
        articlesTable.foreign('topic').references('topics.slug');
        articlesTable.string('author')
        articlesTable.foreign('author').references('users.username');
        articlesTable.timestamp('created_at');
    });
};

exports.down = function (knex, Promise) {
    console.log('removing articles tables...');
    return knex.schema.dropTable('articles');
};
