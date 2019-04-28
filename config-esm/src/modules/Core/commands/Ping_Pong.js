import { Command } from 'axoncore';

class Pong extends Command {
    constructor(module) {
        super(module);

        this.label = 'pong';
        this.aliases = ['pong'];

        this.isSubcmd = true;
        this.hasSubcmd = false;

        this.infos = {
            owners: ['KhaaZ'],
            name: 'ping pong',
            description: 'Ping the bot.',
            usage: 'ping pong',
            examples: ['ping pong'],
        };

        this.options.argsMin = 0;
        this.options.cooldown = 10000;
        this.options.guildOnly = false;
        this.options.hidden = true;

        this.options.invalidPermissionMessage = true;

        this.permissions.user.needed = ['manageGuild'];
        this.permissions.staff.bypass = [...this.axon.staff.owners, ...this.axon.staff.admins];
    }

    async execute( { msg } ) {
        const start = Date.now();

        const mess = await this.sendMessage(msg.channel, 'BADABOUM!');
        if (!mess) {
            return null;
        }

        const diff = (Date.now() - start);

        return this.editMessage(mess, `BADABOUM! \`${diff}ms\``);
    }
}

export default Pong;
