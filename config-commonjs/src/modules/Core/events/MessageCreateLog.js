const { Event } = require('axoncore');

class MessageCreateLog extends Event {
    constructor(...args) {
        super(...args);

        /** Event Name (Discord name) */
        this.eventName = 'messageCreate';
        /** Event name (Function name) */
        this.label = 'messageCreateLog';

        this.enabled = true;

        this.infos = {
            owners: ['KhaaZ'],
            description: 'Log Message Create events',
        };
    }

    execute(message, guildConf) { // eslint-disable-line
        console.log(`Msg ${message.channel.guild.id}`);
        return Promise.resolve();
    }
}

module.exports = MessageCreateLog;
