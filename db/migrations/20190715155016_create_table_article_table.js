
exports.up = function (knex) {
    console.log('creating article table...');
    return knex.schema.createTable('articles', (articlesTable) => {
        articlesTable.increments('article_id').primary();
        articlesTable.string('title').notNullable();
        articlesTable.string('body').notNullable();
        articlesTable.integer('votes').defaultTo(0);
        articlesTable.string('topic').notNullable();
        articlesTable.foreign('topic').references('topics.slug')
    });
};

exports.down = function (knex) {

};
