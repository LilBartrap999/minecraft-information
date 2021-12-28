'use strict';
const axios = require('axios').default;

/**
 * Information about hypixel
 * @param {String} key Provide a hypixel key
*/

function HyPixel(key) {
    if(!key) throw new Error('Please provide an hypixel api key!')

    let validation = validateKey(key)
    if(!validation) return;
    
    
    HyPixel.prototype.player = async function(name) {
        if(!name) throw new Error('A minecraft user name has not been provided');
        const uuid = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
        if(uuid.data == '') throw new Error('This user does not exist');
        const res = await axios.get(`https://api.hypixel.net/player?key=${key}&uuid=${uuid.data.id}`);
        return res.data;
    };

    HyPixel.prototype.friends = async function(name) {
        if(!name) throw new Error('A minecraft user name has not been provided');
        const uuid = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
        if(uuid.data == '') throw new Error('This user does not exist');
        const res = await axios.get(`https://api.hypixel.net/friends?key=${key}&uuid=${uuid.data.id}`);
        return res.data;
    };

    HyPixel.prototype.recentGames = async function(name) {
        if(!name) throw new Error('A minecraft user name has not been provided');
        const uuid = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
        if(uuid.data == '') throw new Error('This user does not exist');
        const res = await axios.get(`https://api.hypixel.net/recentgames?key=${key}&uuid=${uuid.data.id}`);
        return res.data;
    };

    HyPixel.prototype.status = async function(name) {
        if(!name) throw new Error('A minecraft user name has not been provided');
        const uuid = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
        if(uuid.data == '') throw new Error('This user does not exist');
        const res = await axios.get(`https://api.hypixel.net/status?key=${key}&uuid=${uuid.data.id}`);
        return res.data;
    };

    HyPixel.prototype.boosters = async function() {
        const res = await axios.get(`https://api.hypixel.net/boosters?key=${key}`);
        return res.data;
    };

    HyPixel.prototype.playerCount = async function() {
        const res = await axios.get(`https://api.hypixel.net/counts?key=${key}`);
        return res.data;
    };

    HyPixel.prototype.leaderboards = async function() {
        const res = await axios.get(`https://api.hypixel.net/leaderboards?key=${key}`);
        return res.data;
    };

    HyPixel.prototype.punishments = async function() {
        const res = await axios.get(`https://api.hypixel.net/punishmentstats?key=${key}`);
        return res.data;
    };
}

async function validateKey(key) {
    try {
        const response = await axios.get(`https://api.hypixel.net/key?key=${key}`);
        let data = response.data;
        if(data.success === true) return true;
    } catch (error) {
        throw new Error('Please provide an valid hypixel api key!');
    }
}

module.exports = {
    HyPixel
};