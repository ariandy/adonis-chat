'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReceiverSchema extends Schema {
  up () {
    this.create('receivers', (table) => {
      table.increments()
      table.integer('message_id').unsigned()
      table.foreign('message_id')
            .references('id')
            .inTable('messages')
            .onDelete('CASCADE')
      table.integer('receiver_id').unsigned()
      table.foreign('receiver_id')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('receivers')
  }
}

module.exports = ReceiverSchema
