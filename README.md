# MINECRAFT-INFORMATION
[![npm version](https://img.shields.io/npm/v/minecraft-information?label=version)](https://www.npmjs.com/package/minecraft-information)
[![License](https://img.shields.io/npm/l/minecraft-information)](https://www.npmjs.com/package/minecraft-information)
[![Npm weekly downloads](https://img.shields.io/npm/dw/minecraft-information)](https://www.npmjs.com/package/minecraft-information)
[![Discord server](https://img.shields.io/discord/770577878470623262?label=discord)](https://discord.gg/quSpqcr)

> minecraft-information is an npm that makes it easy to find minecraft data for your projects in JavaScript.

### Content index
  - [Content index](#content-index)
  - [Installation](#installation)
  - [Values](#values)
  - [How to use](#how-to-use)
  - [Information](#information)
  - [ChangeLog](#changelog)

## Installation 

```bash
npm install minecraft-information --save
```

## Values

| value | async? | example |
|--|--|--|
| head(name) | true | head('anibal_03')
| avatar(name) | true | avatar('anibal_03')
| body(name) | true | body('anibal_03')
| skin(name) | true | skin('anibal_03')
| cape(name) | true | cape('anibal_03')
| server(ip) | true | server('play.hipixel.net')
| profile(name) | true | profile('anibal_03')
| mojang() | true | mojang()
| hypixel(name) | true | hypixel('anibal_03')
| achievement(title, content) | true | achievement('achievement', 'write an text') |
| names() | true | names(anibal_03)



## How to use
```js
const { head } = require('minecraft-information');

head('anibal_03').then(async(res) => {
  await console.log(res)
})
```
#### How to use on discord.js
```js
const discord = require('discord.js')
const client = new discord.Client()
const { head } = require('minecraft-information');

client.on('message', async(msg) => {
  if(msg.content.startsWith('p '+'head')){
    let head = await head('anibal_03')
    message.channel.send({files:[head]})
  }
})
```

## Errors and Solutions

### head, avatar, body, skin, cape, profile, hypixel

```diff
- ERROR
```
```dotnetcli
(node:9484) UnhandledPromiseRejectionWarning: Error: A minecraft user name has not been provided
    at Object.head (C:\Users\Utente\Desktop\minecraft-information\src\index.js:5:15)
    at head (C:\Users\Utente\Desktop\minecraft-information\test\test.js:4:23)
    at Object.<anonymous> (C:\Users\Utente\Desktop\minecraft-information\test\test.js:8:1)
    at Module._compile (internal/modules/cjs/loader.js:1015:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1035:10)
    at Module.load (internal/modules/cjs/loader.js:879:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47
```
##
```diff
+ SOLUTION
```
This error occurs when the username to get the head is not provided.
To solve this error, you only have to enter the name as we will see below.
```js
head('anibal_03')
```
##
```diff
- This is not an error but it returns a promise
```

```
Promise { <pending> }
```
##
```diff
+ SOLUTION
```
To solve this the function has to be async
```js
await head('anibal_03')
```
##
### server, server_icon

```diff
- ERROR
```
```dotnetcli
(node:21292) UnhandledPromiseRejectionWarning: Error: A minecraft ip server has not been provided
    at Object.server (C:\Users\Utente\Desktop\minecraft-information\src\index.js:55:15)
    at hypixel (C:\Users\Utente\Desktop\minecraft-information\test\test.js:4:24)
    at Object.<anonymous> (C:\Users\Utente\Desktop\minecraft-information\test\test.js:8:1)
    at Module._compile (internal/modules/cjs/loader.js:1015:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1035:10)
    at Module.load (internal/modules/cjs/loader.js:879:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47
```
```diff
+ SOLUTION
```
This error occurs when the ip to get the server information is not provided.
To solve this error, you only have to enter the server ip as we will see below.
```js
server('play.hypixel.net')
```
##
```diff
- This is not an error but it returns a promise
```
```
Promise { <pending> }
```
##
```diff
+ SOLUTION
```
To solve this the function has to be async
```js
await server('play.hypixel.net')
```
##



## Information

- Creator: Lil Bartrap#3222 (594639565268975618)
- Official Bot: [Invite](https://discord.com/oauth2/authorize?client_id=708562057590603796&scope=bot&permissions=8)
- Official discord: [https://discord.gg/quSpqcr](https://discord.gg/quSpqcr)

> If you want to get more detailed examples invite the [official bot](https://discord.com/oauth2/authorize?client_id=708562057590603796&scope=bot&permissions=8) to your server and write the command: mc!examples

## ChangeLog

  ### v0.3.0
  - New error message
  - All functions are async
  - The achievement now does not need the + sign to be written for the space
  - The cape function has been added
 ### v0.4.0
  - The serve_icon function has been removed
  - The server function has been improved and simplified
  - The hypixel function has been restored
  - The names function has been added
  - The npm has been optimized
