'use strict'
const Message = use('App/Models/Message');
class MessageController {
  async index ({ request, response, view }) {
    let messages = await Message.all()
    return response.json(messages)
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
    const messageInfo = request.only(['sender_id', 'group_id', 'message'])
    const message = new Message()
    message.sender_id = messageInfo.sender_id
    message.group_id = messageInfo.group_id
    message.message = messageInfo.message
    await message.save()
    return response.status(201).json(message)
  }

  async show ({ params, request, response, view }) {
    // const message = await Message.query().find(params.id).with('users').fetch()
    const message = await Message.query()
                                 .with('senders').where('id',params.id)
                                 .with('groups').where('id',params.id)
                                 .fetch()
    return response.json(message)
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = MessageController
