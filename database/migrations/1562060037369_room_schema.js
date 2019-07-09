'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoomSchema extends Schema {
  up () {
    this.create('Rooms', (table) => {
      table.increments()
      table.string('roomName').notNullable()
      table.enu ('roomType', ['group','private']).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('rooms')
  }
}

module.exports = RoomSchema
