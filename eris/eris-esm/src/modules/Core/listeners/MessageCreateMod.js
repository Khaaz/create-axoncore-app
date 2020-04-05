import { Listener } from 'axoncore';
import { PrivateChannel } from 'eris';

class MessageCreateMod extends Listener {
    /**
     * @param {import('axoncore').Module} module
     * @param {import('axoncore').ListenerData} data
     */
    constructor(module, data = {} ) {
        super(module, data);

        /** Event Name (Discord name) */
        this.eventName = 'messageCreate';
        /** Event name (Function name) */
        this.label = 'messageCreateMod';

        this.enabled = true;

        this.info = {
            owners: ['KhaaZ'],
            description: 'Log Message Create events',
        };
    }

    /**
     * @param {import('eris').Message} message
     * @param {import('axoncore').GuildConfig} guildConfig
     */
    execute(message, guildConfig) {
        if (message.channel instanceof PrivateChannel) {
            return Promise.resolve();
        }
        console.log(`Prefix: ${guildConfig.prefixes}`);
        return Promise.resolve();
    }
}

export default MessageCreateMod;
