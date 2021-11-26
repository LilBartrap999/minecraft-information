# MINECRAFT-INFORMATION
[![npm version](https://img.shields.io/npm/v/minecraft-information?label=version)](https://www.npmjs.com/package/minecraft-information)
[![License](https://img.shields.io/npm/l/minecraft-information)](https://www.npmjs.com/package/minecraft-information)
[![Npm weekly downloads](https://img.shields.io/npm/dw/minecraft-information)](https://www.npmjs.com/package/minecraft-information)
[![Discord server](https://img.shields.io/discord/770577878470623262?label=discord)](https://discord.gg/quSpqcr)

### About
minecraft-information is an npm that makes it easy to find minecraft data for your projects in JavaScript.
  - [Installation](#installation)
  - [How to use](#how-to-use)
  - [Functions](#functions)
  - [Information](#information)

## Installation 
Node.js 14 or newer is required

```bash
npm install minecraft-information
yarn add minecraft-information
pnpm add minecraft-information
```

## How to use
```js
const { avatar } = require('minecraft-information');

avatar('example').then(async(res) => {
  console.log(res)
})
```
#### How to use on discord.js
```js
const discord = require('discord.js')
const client = new discord.Client()
const { avatar } = require('minecraft-information');

client.on('message', async(msg) => {
  if(msg.content.startsWith('?'+'avatar')){
    let avatar = await avatar('example')
    message.channel.send({files:[avatar]})
  }
})
```

## Functions

|Function|Type|params
|--|--|--|
|achievement|```String```|title, content, [index]
|avatar|```String```|name, [size]
|body|```String```|name, [size]
|cape|```Object```|name
|head|```String```|name
|hypixel|```Object```|name, key
|names|```Array```|name
|profile|```Object```|name
|skin|```String```|name
|server|```Object```|ip

### Objects

cape
```js
{
  minecraft: any;
  optifine: any;
  minecraftcapes: any;
  labymod: any;
  tlauncher: any;
}
```

hypixel

To get a key:
- Join in the server (play.hypixel.net)
- type the command `/api new`

```js
{
  success: Boolean,
  player: {
    _id: String,
    uuid: String,
    displayname: String,
    firstLogin: Number,
    knownAliases: Array,
    knownAliasesLower: Array,
    lastLogin: Number,
    playername: String,
    achievementsOneTime: Array,
    stats: Object,
    userLanguage: String,
    achievementTracking: Array,
    achievements: Object,
    networkExp: Number,
    lastLogout: Number,
    achievementPoints: Number,
    achievementSync: Object,
    levelingReward_0: Boolean,
    karma: Number,
    friendRequestsUuid: Array,
    petConsumables: Object,
    vanityMeta: Object,
    challenges: Object,
    levelingReward_1: Boolean,
    tourney: Object,
    mcVersionRp: String,
    monthlycrates: Object,
    mostRecentGameType: String,
    housingMeta: Object
}
```

profile
```js
{
  name: String,
  id: String
}
```

server
```js
{
  serverIcon: String,
  ip: String,
  port: Number,
  version: String,
  online: Boolean,
  protocol: Number,
  hostname: String,
  players: { online: Number, max: Number },
  debug: Object,
  motd: {
    raw: Array,
    clean: Array,
    html: Array
  }
}
```

### Arrays

## Information

- Creator: [Lil Bartrap#3222](https://github.com/lilbartrap999)
- Official Bot: [Invite](https://discord.com/oauth2/authorize?client_id=708562057590603796&permissions=535260687424&scope=bot%20applications.commands)
- Official discord: [https://discord.gg/quSpqcr](https://discord.gg/quSpqcr)

> If you want to get more detailed examples invite the [official bot](https://discord.com/oauth2/authorize?client_id=708562057590603796&permissions=535260687424&scope=bot%20applications.commands) to your server and write the command: /examples
