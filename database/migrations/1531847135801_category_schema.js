'use strict'

const Schema = use('Schema')

class CategorySchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.timestamps()
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.string('cat_slug').notNullable()
      table.string('slug')
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema
