'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.get('/','UserController.index')
    Route.get('/:id', 'UserController.show')
    Route.post('/', 'UserController.store')
    Route.patch('/:id', 'UserController.update')
    Route.delete('/:id', 'UserController.destroy')
}).prefix('/api/v1/users/').middleware(['auth:jwt'])

Route.group(() => {
    Route.get('/','RoomController.index')
    Route.get('/:id', 'RoomController.show')
    Route.post('/', 'RoomController.store')
    Route.patch('/:id', 'RoomController.update')
    Route.delete('/:id', 'RoomController.destroy')
    Route.get('/:id/chats', 'UserRoomController.chatsByRoom')
    Route.get('/:id/members', 'UserRoomController.members')
}).prefix('/api/v1/rooms/').middleware(['auth:jwt'])

Route.group(() => {
    Route.get('/','MessageController.index')
    Route.get('/:id', 'MessageController.show')
    Route.post('/', 'MessageController.store')
}).prefix('/api/v1/messages/').middleware(['auth:jwt'])

Route.group(() => {
    Route.post('/login', 'AuthController.postLoginJwt').as('loginJwt')
    Route.post('/refresh', 'AuthController.postRefreshTokenJwt').as('refreshTokenJwt').middleware(['auth:jwt'])
    Route.post('/logout', 'AuthController.postLogoutJwt').as('loginJwt').middleware(['auth:jwt'])
    Route.get('/profile', 'AuthController.getProfileJwt').as('profileJwt').middleware(['auth:jwt'])
}).prefix('api/auth')

