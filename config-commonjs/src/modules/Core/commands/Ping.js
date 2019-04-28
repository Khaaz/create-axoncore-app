const { Command } = require('axoncore');

const Pong = require('./Ping_Pong');

class Ping extends Command {
    constructor(module) {
        super(module);

        this.label = 'ping';
        this.aliases = [
            'ping',
            'pang',
            'pung',
        ];

        this.hasSubcmd = true;
        this.subcmds = [Pong];

        this.infos = {
            owner: ['KhaaZ'],
            name: 'ping',
            description: 'Ping the bot.',
            usage: 'ping',
            examples: ['ping'],
        };

        this.options.argsMin = 0;
        this.options.cooldown = 3000;
        this.options.guildOnly = false;
    }

    async execute( { msg } ) {
        const start = Date.now();

        const mess = await this.sendMessage(msg.channel, 'Pong!');

        if (!mess) {
            return null;
        }

        const diff = (Date.now() - start);

        return this.editMessage(mess, `Pong! \`${diff}ms\``);
    }
}

module.exports = Ping;
