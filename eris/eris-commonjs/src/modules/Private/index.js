const { Module, CommandPermissions } = require('axoncore');

const commands = require('./commands/index');
// const listeners = require('./commands/index');

class Private extends Module {
    constructor(...args) {
        super(...args);

        this.label = 'Private';

        this.enabled = true;
        this.serverBypass = true;

        this.infos = {
            name: 'Private',
            description: 'Very Private. Much Dev. Wow.',
        };

        this.permissions = new CommandPermissions(this, {}, true);
    }

    init() {
        return { commands };
    }
}

module.exports = Private;
