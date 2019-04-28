const { Module } = require('axoncore');

const commands = require('./commands/index');
const events = require('./events/index');

class Core extends Module {
    constructor(...args) {
        super(...args);

        this.label = 'Core';

        this.enabled = true;
        this.serverBypass = true;

        this.infos = {
            name: 'Core',
            description: 'The main module with most basic commands.',
        };

        this.init(commands, events);
    }
}

module.exports = Core;
