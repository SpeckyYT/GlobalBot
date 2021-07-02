const { Client } = require('discord.js');

const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
    ],
    partials: [
        'CHANNEL',
        'GUILD_MEMBER',
        'MESSAGE',
        'REACTION',
        'USER',
    ],
});
