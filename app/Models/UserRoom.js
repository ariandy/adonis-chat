'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserRoom extends Model {
    rooms () {
        return this.belongsTo('App/Models/Room')
    }
    users () {
        return this.belongsTo('App/Models/User')
    }
    messages () {
        return this.hasMany('App/Models/Message')
    }
}

module.exports = UserRoom