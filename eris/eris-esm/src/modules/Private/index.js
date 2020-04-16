import { Module, CommandPermissions } from 'axoncore';

import * as commands from './commands/index';
// import * as listeners from './commands/index';

class Private extends Module {
    /**
     * @param {import('axoncore').AxonClient} client
     * @param {import('axoncore').ModuleData} [data]
     */
    constructor(client, data = {} ) {
        super(client, data);

        this.label = 'Private';

        this.enabled = true;
        this.serverBypass = true;

        this.info = {
            name: 'Private',
            description: 'Very Private. Much Dev. Wow.',
        };

        /**
         * @type {CommandPermissions}
         */
        this.permissions = new CommandPermissions(this, {}, true);
    }

    init() {
        return { commands };
    }
}

export default Private;
