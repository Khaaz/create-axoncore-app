

import { AxonClient, Resolver } from 'axoncore';

import * as modules from './modules/index';

class Client extends AxonClient {
    constructor(client, axonOptions) {
        super(client, axonOptions, modules);
    }

    get Resolver() {
        return Resolver;
    }

    initStaff() {
        // Called after initOwners has run
        // setup bot staff as per your convenience. Can be anything
        this.staff.contributor = [];
    }

    init() {
        // calledafter _init()
        // additional init stuff
        return Promise.resolve();
    }

    initStatus() {
        // called after ready event
        // overrides default editStatus
        // used to setup custom status
        this.client.editStatus(null, {
            name: `AxonCore | ${this.params.prefix[0]}help`,
            type: 0,
        } );
    }

    $sendFullHelp(msg) {
        // override sendFullHelp method (remove $)
        return this.AxonUtils.sendMessage(msg.channel, 'Full Help override');
    }

    $sendHelp(command, msg) {
        // override sendHelp method (remove $)
        return this.AxonUtils.sendMessage(msg.channel, `Help override for ${command.label}`);
    }
}

export default Client;
