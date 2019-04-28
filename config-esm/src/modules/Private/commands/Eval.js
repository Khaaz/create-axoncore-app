import nodeUtil from 'util';

import { Command } from 'axoncore';

class Eval extends Command {
    constructor(module) {
        super(module);

        this.label = 'eval';
        this.aliases = ['eval', 'e'];

        this.infos = {
            owner: [
                'AS04',
                'Ape',
                'KhaaZ',
            ],
            name: 'eval',
            description: 'Eval js code.',
            usage: 'eval [js code]',
            examples: ['eval 1 + 1'],
        };

        this.options.argsMin = 1;
        this.options.cooldown = null;

        this.permissions.staff.needed = this.axon.staff.owners;
        this.permissions.staff.bypass = this.axon.staff.owners;
    }
  
    async execute( {
        msg, args, guildConf, // eslint-disable-line
    } ) {
        /* eslint-disable */
            const Util = this.Util;
            const Resolver = this.Resolver;
            const Template = this.Template
            const axon = this.axon;
            const guild = msg.channel.guild;
            const channel = msg.channel;
            /* eslint-enable */

        let evaled;
        try {
            evaled = await eval(args.join(' ') ); // eslint-disable-line no-eval
        } catch (err) {
            this.Logger.debug(err.stack);
            return this.sendError(msg.channel, err.message ? err.message : err.name);
        }

        if (typeof evaled === 'object') {
            evaled = nodeUtil.inspect(evaled, { depth: 0, showHidden: true } );
        } else {
            evaled = String(evaled);
        }

        /** Just for security. */
        evaled = evaled.replace(this.bot._token, 'Khaaz\'s Baguette');

        const fullLen = evaled.length;

        if (fullLen === 0) { // eslint-disable-line no-magic-numbers
            return null;
        }

        if (fullLen > 2000) { // eslint-disable-line no-magic-numbers
            evaled = evaled.match(/[\s\S]{1,1900}[\n\r]/g) || [];
            if (evaled.length > 3) { // eslint-disable-line no-magic-numbers
                this.sendMessage(msg.channel, `Cut the response! [${evaled.length} | ${fullLen}]`);
                this.sendMessage(msg.channel, `\`\`\`js\n${evaled[0]}\`\`\``);
                this.sendMessage(msg.channel, `\`\`\`js\n${evaled[1]}\`\`\``);
                return this.sendMessage(msg.channel, `\`\`\`js\n${evaled[2]}\`\`\``);
            }
            return evaled.forEach( (message) => {
                this.sendMessage(msg.channel, `\`\`\`js\n${message}\`\`\``);
                return;
            } );
        }
        return this.sendMessage(msg.channel, `\`\`\`js\n${evaled}\`\`\``);
    }
}

export default Eval;
