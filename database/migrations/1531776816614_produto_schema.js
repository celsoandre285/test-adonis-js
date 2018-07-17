'use strict'

const Schema = use('Schema')

class ProdutoSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table.string('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutoSchema
