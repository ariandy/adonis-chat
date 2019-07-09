'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Message extends Model {
    // static get hidden(){
    //     return ['sender_id']
    // }

    users () {
        return this.belongsTo('App/Models/User')
    }
    rooms () {
        return this.belongsTo('App/Models/Room')
    }
    userrooms () {
        return this.belongsTo('App/Models/UserRoom')
    }
}

module.exports = Message
