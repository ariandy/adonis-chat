'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Room extends Model {
    userrooms () {
        return this.hasMany('App/Models/UserRoom')
    }
}

module.exports = Room
