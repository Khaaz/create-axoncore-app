const { Module } = require('axoncore');

const commands = require('./commands/index');
// const index = require('./index/index');;

class Private extends Module {
    constructor(...args) {
        super(...args);

        this.label = 'Private';

        this.enabled = true;
        this.serverBypass = true;

        this.infos = {
            name: 'Private',
            description: 'Very Private module.',
        };

        this.init(commands);
    }
}

module.exports = Private;
