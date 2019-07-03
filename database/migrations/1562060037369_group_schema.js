'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupSchema extends Schema {
  up () {
    this.create('groups', (table) => {
      table.increments()
      table.string('groupname').notNullable()
      table.integer('sender_id').unsigned()
      table.foreign('sender_id').references('id').inTable('users').onDelete('RESTRICT')
      table.integer('receiver_id').unsigned()
      table.foreign('receiver_id').references('id').inTable('users').onDelete('RESTRICT')
      table.timestamps()
    })
  }

  down () {
    this.drop('groups')
  }
}

module.exports = GroupSchema
