<a href="">
  <img src="https://img.shields.io/badge/Project-AdonisJS-brightgreen.svg"/>
</a>

## Table of Contents

- [Introduction](#introduction)
- [Endpoints](#endpoints)
- [Requirements](#requirements)
- [Contributors](#contributors)

## Related Project
* <a href="https://github.com/ariandy/chat-frontend">React Native - CHAT App</a>

## Introduction
Chat App Backend - Build With AdonisJS

## Endpoints
* `POST api/auth/login`, for login purpose.
* `GET /api/v1/rooms`, to see all of the rooms list.
* `GET /api/v1/rooms/:id/chats`, to see all off the message in room.
* `POST /api/v1/messages`, send a message.

## Requirements
* [`npm`](https://www.npmjs.com/get-npm)
* [`adonisjs`](https://adonisjs.com)


## How To Run

1. Clone this repository
   ```
   $ git clone https://github.com/ariandy/adonis-chat.git
   ```
2. Install all depedencies on the package.json
   ```
   $ cd adonis-chat
   $ npm install
   ```
3. Just run the migration and seed
   ```
   $ adonis migration:run
   $ adonis seed
   ```
4. Run the Adonis server
   ```
   $ adonis serve --dev
   ```
