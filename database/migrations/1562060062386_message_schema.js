'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MessageSchema extends Schema {
  up () {
    this.create('messages', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('id').inTable('users').onDelete('RESTRICT')
      table.integer('group_id').unsigned()
      table.foreign('group_id').references('id').inTable('groups').onDelete('RESTRICT')
      table.string('message')
      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }
}

module.exports = MessageSchema
