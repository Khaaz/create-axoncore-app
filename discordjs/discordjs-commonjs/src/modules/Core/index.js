const { Module } = require('axoncore');

const commands = require('./commands/index');
const listeners = require('./listeners/index');

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
    }

    init() {
        return { commands, listeners };
    }
}

module.exports = Core;
