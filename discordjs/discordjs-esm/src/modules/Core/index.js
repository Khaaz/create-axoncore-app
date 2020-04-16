import { Module } from 'axoncore';

import * as commands from './commands/index';
import * as listeners from './listeners/index';

class Core extends Module {
    /**
     * @param {import('axoncore').AxonClient} client
     * @param {import('axoncore').ModuleData} data
     */
    constructor(client, data = {} ) {
        super(client, data);

        this.label = 'Core';

        this.enabled = true;
        this.serverBypass = true;

        this.info = {
            name: 'Core',
            description: 'The main module with most basic commands.',
        };
    }

    init() {
        return { commands, listeners };
    }
}

export default Core;
