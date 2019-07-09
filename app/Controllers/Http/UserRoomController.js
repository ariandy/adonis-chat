'use strict'

const Env = use('Env')
const Chat = use('App/Models/Message')
const UserRoom = use('App/Models/UserRoom')
const Database = use('Database')

class UserRoomController {
  
  async index ({ request, response, view }) {
    let userrooms = await UserRoom.all()
    return response.json(userrooms)
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
    const userroomInfo = request.only(['user_id', 'group_id'])
    const userroom = new UserRoom()
    userroom.user_id = userroomInfo.user_id
    userroom.group_id = userroomInfo.group_id
    await userroom.save()
    return response.status(201).json(userroom)
  }

  async show ({ params, request, response, view }) {
    const userroom = await UserRoom.find(params.id)
    return response.json(userroom)
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
    const userroomInfo = request.only(['user_id', 'group_id'])
    const userroom = await UserRoom.find(params.id)
    if (!userroom) {
      return response.status(404).json({data: 'Resource not found'})
    }
    userroom.user_id = userroomInfo.user_id
    userroom.group_id = userroomInfo.group_id
    await userroom.save()
    return response.status(200).json(userroom)
  }

  async destroy ({ params, request, response }) {
    const userroom = await UserRoom.find(params.id)
    if (!userroom) {
      return response.status(404).json({data: 'Resource not found'})
    }
    await userroom.delete()
    return response.status(204).json(null)
  }

  async chatsByRoom ({request, response, auth, params}) {
    const user = await auth.getUser()
    const page = request.get('page').page || 1
    const limit = Env.get('PAGE_LIMIT')
    const results = await Database.raw("SELECT messages.*, users.name FROM messages INNER JOIN user_rooms ON messages.user_room_id = user_rooms.id INNER JOIN users ON user_rooms.user_id = users.id WHERE user_rooms.room_id = ? ORDER BY messages.created_at ASC", params.id)
    return response.status(200)
                   .send(results)
  }

  async members ({request, response, params, auth}) {
    const user = await auth.getUser()
    const results = await user.rooms().where('rooms.id', params.id).with('users').paginate(1, 5)

    return response.status(200).send(results)
  }
}

module.exports = UserRoomController
