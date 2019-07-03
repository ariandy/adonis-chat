'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Group extends Model {
    Senders () {
        return this.belongsTo('/App/Models/User', sender_id, id)
    }
    Receivers () {
        return this.belongsTo('/App/Models/User', receiver_id, id)
    }
    Messages () {
        return this.hasMany('/App/Models/Messages')
    }
}

module.exports = Group
