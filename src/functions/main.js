//@ts-check
const axios = require('axios').default;

/**
 * Get a link to create a minecraft achievement image
 * @param {String} title Provide an title for the achievement
 * @param {String} content Provide an description for the achievement
 * @param {Number} [index] Provide achievement Type (optional)
 * @returns String
 */

function achievement(title, content, index) {
    if(!title || !content) {
        throw Error ("Title or content has not been provided");
    } else if(index <= 0 || index > 39) {
        throw Error ("The index has to be from 1 to 39");
    } else {
        if(!index) index = Math.floor(Math.random() * 39)
        title = title.replace(" ", "+")
        return `https://minecraftskinstealer.com/achievement/${index}/${title}/${content}`
    }
}

/**
 * Get an image of the minecraft user's avatar
 * @param {String} name Provide a minecraft username
 * @param {Number} [size] Provide an size (optional)
 * @returns String
 * @example 
 * const { avatar } = require('minecraft-information');
 * avatar('example', 512).then(async x => {
 *   console.log(x)
 * })
 */

async function avatar(name, size) {
    if(!name) throw Error('A minecraft user name has not been provided');
    if(size <= 0 || size > 512) throw Error ("The size has to be from 1 to 512");
    const res = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
    return await `https://crafatar.com/avatars/${res.data.id}${size ? '?size='+size : '?size='+512}&overlay&default=MHF_Steve&scale=10.png`;
}

/**
 * Get an image of the minecraft user's body
 * @param {String} name Provide a minecraft username
 * @param {Number} [size] Provide an size (optional)
 * @returns String
 * @example 
 * const { body } = require('minecraft-information');
 * body('example', 512).then(async x => {
 *   console.log(x)
 * })
 */

async function body(name, size) {
    if(!name) throw Error('A minecraft user name has not been provided');
    if(size <= 0 || size > 512) throw Error ("The size has to be from 1 to 512");
    const res = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
    return await `https://crafatar.com/renders/body/${res.data.id}${size ? '?size='+size : '?size='+512}&default=MHF_Steve&overlay&scale=10.png`
}

/**
 * Get an image of the minecraft user's cape
 * @param {String} name Provide a minecraft username
 * @returns Object
 * @example 
 * const { cape } = require('minecraft-information');
 * cape('example').then(async x => {
 *   console.log(x.minecraft)
 * })
 */

async function cape(name) {
    if(!name) throw Error('A minecraft user name has not been provided');
    const res = await axios.get(`https://api.capes.dev/load/${name}`);
    return {
        minecraft: await res.data.minecraft.msg == 'Cape found' ? res.data.minecraft.frontImageUrl : 'Player has no cape',
        optifine: await res.data.optifine.msg == 'Cape found' ? res.data.optifine.capeUrl : 'Player has no cape',
        minecraftcapes: await res.data.minecraftcapes.msg == 'Cape found' ? res.data.minecraftcapes.capeUrl : 'Player has no cape',
        labymod: await res.data.labymod.msg == 'Cape found' ? res.data.labymod.capeUrl : 'Player has no cape',
        tlauncher: await res.data.tlauncher.msg == 'Cape found' ? res.data.tlauncher.capeUrl : 'Player has no cape',
    }
}

/**
 * Get an image of the minecraft user's head
 * @param {String} name Provide a minecraft username
 * @returns String
 * @example 
 * const { head } = require('minecraft-information');
 * head('example').then(async x => {
 *   console.log(x)
 * })
 */

async function head(name) {
    if(!name) throw Error('A minecraft user name has not been provided');
    const res = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
    return await `https://crafatar.com/renders/head/${res.data.id}?overlay&default=MHF_Steve&scale=10.png`;
}

/**
 * Get information from a hypixel user
 * @param {String} name Provide a minecraft username
 * @returns Object
 * @example 
 * const { hypixel } = require('minecraft-information');
 * hypixel('example').then(async x => {
 *   console.log(x)
 * })
 */

async function hypixel(name) {
    if(!name) throw Error('A minecraft user name has not been provided');
    const key = require('../util/data.json').hypixelKEY
    const uuid = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
    const res = await axios.get(`https://api.hypixel.net/player?key=${key}&uuid=${uuid.data.id}`);
    return res.data;
}

/**
 * Get the names of a user
 * @param {String} name Provide a minecraft username
 * @returns Array
 * @example 
 * const { names } = require('minecraft-information');
 * names('example').then(async x => {
 *   console.log(x)
 * })
 */

async function names(name) {
    if(!name) throw Error('A minecraft user name has not been provided');
    const uuid = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`)
    const list = await axios.get(`https://api.mojang.com/user/profiles/${uuid.data.id}/names`)
    return list.data
}


/**
 * Get the profile of a user
 * @param {String} name Provide a minecraft username
 * @returns Object
 * @example 
 * const { profile } = require('minecraft-information');
 * profile('example').then(async x => {
 *   console.log(x)
 * })
 */

async function profile(name) {
    if(!name) throw Error('A minecraft user name has not been provided');
    const res = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
    return res.data 
}

/**
 * Get an image of the minecraft user's skin
 * @param {String} name Provide a minecraft username
 * @returns String
 * @example 
 * const { skin } = require('minecraft-information');
 * skin('example').then(async x => {
 *   console.log(x)
 * })
 */

async function skin(name) {
    if(!name) throw Error('A minecraft user name has not been provided');
    const res = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
    return await `https://crafatar.com/skins/${res.data.id}?default=MHF_Steve.png`;
}

/**
 * Get information from a minecraft server
 * @param {String} ip Provide a minecraft server ip
 * @returns Object
 * @example 
 * const { server } = require('minecraft-information');
 * server('example').then(async x => {
 *   console.log(x)
 * })
 */

async function server(ip) {
    if(!ip) throw Error('A minecraft ip server has not been provided');
    const api = await axios.get(`https://api.mcsrvstat.us/2/${ip}`)
    const data = api.data;
    return {
        serverIcon: `https://api.mcsrvstat.us/icon/${ip.toLowerCase()}`,
        ip: data.ip,
        port: data.port,
        version: data.version,
        online: data.online,
        protocol: data.protocol,
        hostname: data.hostname,
        players: {
            online: data.players.online,
            max: data.players.max
        },
        debug:{
            ping: data.debug.ping,
            query: data.debug.query,
            srv: data.debug.srv,
            querymismatch: data.debug.querymismatch,
            ipinsrv: data.debug.ipinsrv,
            cnameinsrv: data.debug.cnameinsrv,
            animatedmotd: data.debug.animatedmotd,
            cachetime: data.debug.cachetime,
            apiversion: data.debug.apiversion,
        },
        motd: {
            raw: data.motd.raw,
            clean: data.motd.clean,
            html: data.motd.html
        },
    }
}

module.exports = {
    achievement,
    avatar,
    body,
    cape,
    head,
    hypixel,
    names,
    profile,
    skin,
    server
}