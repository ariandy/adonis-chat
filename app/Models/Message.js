'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Message extends Model {
    Users () {
        return this.belongsTo('/App/Models/User')
    }
    Groups () {
        return this.belongsTo('/App/Models/Group')
    }
}

module.exports = Message
