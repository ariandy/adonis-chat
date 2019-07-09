'use strict'
const Room = use('App/Models/Room');
class RoomController {
  async index ({ request, response, view }) {
    let rooms = await Room.all()
    return response.json(rooms)
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
    const roomInfo = request.only(['roomName','roomType'])
    const room = new Room()
    room.roomName = roomInfo.roomName
    room.roomType = roomInfo.roomType
    await room.save()
    return response.status(201).json(room)
  }

  async show ({ params, request, response, view }) {
    const room = await Room.find(params.id)
    return response.json(room)
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
    const roomInfo = request.only(['roomName','roomType'])
    const room = await Room.find(params.id)
    if (!room) {
      return response.status(404).json({data: 'Resource not found'})
    }
    room.roomName = roomInfo.roomName
    room.roomType = roomInfo.roomType

    await room.save()
    return response.status(200).json(room)
  }

  async destroy ({ params, request, response }) {
    const room = await Room.find(params.id)
    if (!room) {
      return response.status(404).json({data: 'Resource not found'})
    }
    await room.delete()
    return response.status(204).json(null)
  }
}

module.exports = RoomController