const { Listener } = require('axoncore');

class GuildCreate extends Listener {
    constructor(...args) {
        super(...args);

        /** Event Name (Discord name) */
        this.eventName = 'guildCreate';
        /** Event name (Function name) */
        this.label = 'guildCreate';

        this.enabled = true;

        this.info = {
            owners: ['KhaaZ'],
            description: 'Guild Create event',
        };
    }

    execute(guild, guildConfig) { // eslint-disable-line 
        console.log(`Guild Created: ${guild.name} [${guild.id}]`);
        return Promise.resolve();
    }
}

module.exports = GuildCreate;
