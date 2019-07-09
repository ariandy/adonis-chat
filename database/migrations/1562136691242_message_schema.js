'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MessageSchema extends Schema {
  up () {
    this.create('messages', (table) => {
      table.increments()
      table.integer('user_room_id').unsigned()
      table.foreign('user_room_id')
            .references('id')
            .inTable('user_rooms')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
      table.string('message')
      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }
}

module.exports = MessageSchema
