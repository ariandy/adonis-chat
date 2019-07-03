'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserGroupSchema extends Schema {
  up () {
    this.create('user_groups', (table) => {
      table.integer('user_id').unsigned()
      table.foreign('user_id')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
      table.integer('group_id').unsigned()
      table.foreign('group_id')
            .references('id')
            .inTable('groups')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('user_groups')
  }
}

module.exports = UserGroupSchema
