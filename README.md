# MINECRAFT-INFORMATION
[![npm version](https://img.shields.io/npm/v/minecraft-information?label=version)](https://www.npmjs.com/package/minecraft-information)
[![License](https://img.shields.io/npm/l/minecraft-information)](https://www.npmjs.com/package/minecraft-information)
[![Npm weekly downloads](https://img.shields.io/npm/dw/minecraft-information)](https://www.npmjs.com/package/minecraft-information)
[![Discord server](https://img.shields.io/discord/770577878470623262?label=discord)](https://discord.gg/hhBxfXnfUn)

### About
minecraft-information is an npm that makes it easy to find minecraft data for your projects in JavaScript.
  - [Installation](#installation)
  - [How to use](#how-to-use)
  - [Functions](#functions)
  - [Information](#information)

## Installation 
Node.js 12 or newer is required

```bash
npm install minecraft-information
yarn add minecraft-information
pnpm add minecraft-information
```

## How to use
```js

const { Minecraft }  = require('minecraft-information');
const { HyPixel } = require('minecraft-information');
const hypixel = new HyPixel('HIPIXEL_API_KEY');


Minecraft.avatar('example').then(async(res) => {
  console.log(res)
})

hypixel.player('example').then(async x => {
    console.log(x)
})

```
#### How to use on discord.js
```js
const { Client } = require('discord.js')
const client = new Client()
const { Minecraft }  = require('minecraft-information');

client.on('message', async(msg) => {
  if(msg.content.startsWith('?'+'avatar')){
    let avatar = await Minecraft.avatar('example')
    message.channel.send({files:[avatar]})
  }
})
```

## Functions

|Function|params
|--|--|
| [HyPixel](#hypxel) |API-key
| [Minecraft](#minecraft) |

### Hypixel

Require an api key

|Function|Type|params
|--|--|--|
|player|```Object```|name
|friends|```Object```|name
|recentGames|```Object```|name
|status|```Object```|name
|boosters|```Object```|
|playerCount|```Object```|
|leaderboards|```Object```|
|punishments|```Object```|

#### How to get a hypixel key:
- Join in the server (play.hypixel.net)
- Type the command `/api new`

### Minecraft

|Function|Type|params
|--|--|--|
|achievement|```String```|title, content, [index]
|avatar|```String```|name, [size]
|body|```String```|name, [size]
|cape|```Object```|name
|head|```String```|name
|names|```Array```|name
|profile|```Object```|name
|skin|```String```|name
|server|```Object```|ip

## Information

- Creator: [Lil Bartrap#3222](https://github.com/lilbartrap999)
- Official Bot: [Invite](https://discord.com/oauth2/authorize?client_id=708562057590603796&permissions=414669721281&scope=bot)
- Official discord: [https://discord.gg/hhBxfXnfUn](https://discord.gg/hhBxfXnfUn)

> If you want to get more detailed examples invite the [official bot](https://discord.com/oauth2/authorize?client_id=708562057590603796&permissions=414669721281&scope=bot) to your server and write the command: !examples
