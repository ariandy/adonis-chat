'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MessageSchema extends Schema {
  up () {
    this.create('messages', (table) => {
      table.increments()
      table.integer('sender_id').unsigned()
      table.foreign('sender_id')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
      table.integer('group_id').unsigned()
      table.foreign('group_id')
            .references('id')
            .inTable('groups')
            .onDelete('CASCADE')
      table.string('message')
      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }
}

module.exports = MessageSchema
