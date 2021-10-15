const axios = require('axios');

const head = async(name) => {
    if(!name) {
        throw Error
        ('A minecraft user name has not been provided')
    }else{
        return `https://cravatar.eu/helmhead/${name}/600.png`;
    }
};

const avatar = async(name) => {
    if(!name) {
        throw Error
        ('A minecraft user name has not been provided')
    }else{
        return `https://cravatar.eu/helmavatar/${name}/600.png`;
    }
};

const body = async(name) => {
    if(!name) {
        throw Error
        ('A minecraft user name has not been provided')
    }else{
        const res = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
        let result = await `https://crafatar.com/renders/body/${res.data.id}?size=512&default=MHF_Steve&overlay&scale=10.png`;
        return result;
    }
};

const skin = async(name) => {
    if(!name) {
        throw Error
        ('A minecraft user name has not been provided')
    }else{
        const res = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
        return `https://crafatar.com/skins/${res.data.id}?size=512&default=MHF_Steve&overlay&scale=10.png`;
    }
};

const cape = async(name) => {
    if(!name) {
        throw Error
        ('A minecraft user name has not been provided')
    }else{
        const uuid = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`)
        const res = await `https://crafatar.com/capes/${uuid.data.id}?size=512&scale=10.png`
        return res;
    }
}

const server = async(ip) => {
    if(!ip) {
        throw Error
        ('A minecraft ip server has not been provided')
    }else{
        const api = await axios.get(`https://api.mcsrvstat.us/2/${ip}`)
        const data = api.data;
        const filter = {
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
        return filter;
    }
};


const profile = async(name) => {
    if(!name) {
        throw Error
        ('A minecraft user name has not been provided')
    }else{
        const res = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
        const data = await axios.get(`https://sessionserver.mojang.com/session/minecraft/profile/${res.data.id}`);
        return data.data;
    }
};

const mojang = async() => {
    const res = await axios.get(`https://status.mojang.com/check`);
    return res.data;
}

const hypixel = async(name) => {
    if(!name) {
        throw Error
        ('A minecraft user name has not been provided')
    }else{
        const key = require('./util/data.json').hypixelKEY
        const uuid = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
        const res = await axios.get(`https://api.hypixel.net/player?key=${key}&uuid=${uuid.data.id}`);
        return res.data;
    }
}

const achievement = async(title, content) => {
    if(!title || !content) {
        throw Error
        ("Title or content has not been provided");
    }else {
        title = title.replace(" ", "+")
        let links = [
            `https://minecraftskinstealer.com/achievement/1/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/2/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/3/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/4/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/5/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/6/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/7/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/8/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/9/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/10/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/11/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/12/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/13/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/14/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/15/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/16/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/17/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/18/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/19/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/20/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/21/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/22/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/23/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/24/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/25/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/26/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/27/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/28/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/29/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/30/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/31/${title}/${content}`, 
            `https://minecraftskinstealer.com/achievement/32/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/33/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/34/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/35/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/36/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/37/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/38/${title}/${content}`,
            `https://minecraftskinstealer.com/achievement/39/${title}/${content}`,
        ]
        let res = links[Math.floor(Math.random() * links.length)]
        return res;
    }
}

const names = async(name) => {
    if(!name) {
        throw Error
        ('A minecraft user name has not been provided')
    }else {
        const uuid = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`)
        const list = await axios.get(`https://api.mojang.com/user/profiles/${uuid.data.id}/names`)
        return list.data
    }
}

module.exports = {
    head,
    avatar,
    body,
    skin,
    cape,
    server,
    profile,
    mojang,
    achievement,
    hypixel,
    names
};