'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserRoomSchema extends Schema {
  up () {
    this.create('user_rooms', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table.foreign('user_id')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
      table.integer('room_id').unsigned()
      table.foreign('room_id')
            .references('id')
            .inTable('rooms')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('user_rooms')
  }
}

module.exports = UserRoomSchema
