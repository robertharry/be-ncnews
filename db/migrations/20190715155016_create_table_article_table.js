

exports.up = function (knex) {
    console.log('creating articles table...');
    return knex.schema.createTable('articles', (articlesTable) => {
        articlesTable.increments('article_id').primary().references('article_id');
        articlesTable.string('title').notNullable();
        articlesTable.string('body').notNullable();
        articlesTable.integer('votes').defaultTo(0);
        articlesTable.string('topic')
    });
};

exports.down = function (knex, Promise) {
    console.log('removing articles tables...');
    return knex.schema.dropTable('articles');
};
