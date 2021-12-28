'use strict';
const axios = require('axios').default;


function Minecraft() {

    Minecraft.prototype.test = async function() {
        return 'test'
    };

    Minecraft.prototype.achievement = async function(title, content, index) {
        if(!title || !content) {
            throw new Error ("Title or content has not been provided");
        } else if(index <= 0 || index >= 40) {
            throw new Error ("The index has to be from 1 to 39");
        } else {
            if(!index) index = Math.floor(Math.random() * 39)
            title = title.replaceAll(" ", "+")
            content = content.replaceAll(' ', '%20')
            return `https://minecraftskinstealer.com/achievement/${index}/${title}/${content}`
        }
    };

    Minecraft.prototype.avatar = async function(name, size) {
        if(!name) throw new Error('A minecraft user name has not been provided');
        if(size <= 0 || size > 512) throw new Error ("The size has to be from 1 to 512");
        const res = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
        let url = await `https://crafatar.com/avatars/${res.data.id}${size ? '?size='+size : '?size='+512}&overlay&default=MHF_Steve&scale=10.png`;
        let badResponse = `https://crafatar.com/avatars/undefined${size ? '?size='+size : '?size='+512}&overlay&default=MHF_Steve&scale=10.png`;
        if(url === badResponse) throw new Error('This user does not exist');
        return url
    };

    Minecraft.prototype.body = async function(name, size) {
        if(!name) throw new Error('A minecraft user name has not been provided');
        if(size <= 0 || size > 512) throw new Error ("The size has to be from 1 to 512");
        const res = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
        let url = await `https://crafatar.com/renders/body/${res.data.id}${size ? '?size='+size : '?size='+512}&default=MHF_Steve&overlay&scale=10.png`;
        let badResponse = `https://crafatar.com/renders/body/undefined${size ? '?size='+size : '?size='+512}&default=MHF_Steve&overlay&scale=10.png`;
        if(url === badResponse) throw new Error('This user does not exist');
        return url
    };

    Minecraft.prototype.cape = async function(name) {
        if(!name) throw new Error('A minecraft user name has not been provided');
        const res = await axios.get(`https://api.capes.dev/load/${name}`);
        return {
            minecraft: await res.data.minecraft.msg == 'Cape found' ? res.data.minecraft.frontImageUrl : 'Player has no cape',
            optifine: await res.data.optifine.msg == 'Cape found' ? res.data.optifine.capeUrl : 'Player has no cape',
            minecraftcapes: await res.data.minecraftcapes.msg == 'Cape found' ? res.data.minecraftcapes.capeUrl : 'Player has no cape',
            labymod: await res.data.labymod.msg == 'Cape found' ? res.data.labymod.capeUrl : 'Player has no cape',
            tlauncher: await res.data.tlauncher.msg == 'Cape found' ? res.data.tlauncher.capeUrl : 'Player has no cape',
        }
    };

    Minecraft.prototype.head = async function(name) {
        if(!name) throw new Error('A minecraft user name has not been provided');
        const res = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
        let url = await `https://crafatar.com/renders/head/${res.data.id}?overlay&default=MHF_Steve&scale=10.png`;
        let badResponse = `https://crafatar.com/renders/head/undefined?overlay&default=MHF_Steve&scale=10.png`;
        if(url === badResponse) throw new Error('This user does not exist');
        return url
    };

    Minecraft.prototype.names = async function(name) {
        if(!name) throw new Error('A minecraft user name has not been provided');
        const uuid = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`)
        if(uuid.data == '') throw new Error('This user does not exist');
        const list = await axios.get(`https://api.mojang.com/user/profiles/${uuid.data.id}/names`)
        return list.data
    };

    Minecraft.prototype.profile = async function(name) {
        if(!name) throw new Error('A minecraft user name has not been provided');
        const res = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
        if(res.data == '') throw new Error('This user does not exist');
        return res.data 
    };

    Minecraft.prototype.skin = async function(name) {
        if(!name) throw new Error('A minecraft user name has not been provided');
        const res = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
        let url = await `https://crafatar.com/skins/${res.data.id}?default=MHF_Steve.png`;
        let badResponse = `https://crafatar.com/skins/undefined?default=MHF_Steve.png`;
        if(url === badResponse) throw new Error('This user does not exist');
        return url
    };

    Minecraft.prototype.server = async function(ip) {
        if(!ip) throw new Error('A minecraft ip server has not been provided');
        const api = await axios.get(`https://api.mcsrvstat.us/2/${ip}`)
        const data = api.data;
        if(data.online === false) throw new Error('This server doesn\'t exist');
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
            }
        }
    };
}

module.exports = {
    Minecraft: new Minecraft()
}