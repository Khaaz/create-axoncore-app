import { AxonClient } from 'axoncore';

import * as modules from './modules/index';

/**
 * Example - Client constructor
 *
 * @author KhaaZ
 *
 * @class Client
 * @extends AxonClient
 */
class Client extends AxonClient {
    /**
     * @param {import('eris').Client} client
     * @param {import('axoncore').AxonOptions} axonOptions
     */
    constructor(client, axonOptions) {
        super(client, axonOptions, modules);
    }

    /**
     * @returns {true}
     */
    onInit() {
        this.staff.contributors = [];
        return true;
    }

    /**
     * @returns {Promise<true>}
     */
    onStart() {
        return Promise.resolve(true);
    }

    /**
     * @returns {Promise<true>}
     */
    onReady() {
        return Promise.resolve(true);
    }

    initStatus() {
        // called after ready event
        // overrides default editStatus
        // used to setup custom status
        this.botClient.editStatus(null, {
            name: `AxonCore | ${this.settings.prefixes[0]}help`,
            type: 0,
        } );
    }

    // disabled
    /**
     * @param {import('eris').Message} msg
     * @param {import('axoncore').GuildConfig} guildConfig
     */
    // eslint-disable-next-line no-unused-vars
    $sendFullHelp(msg, guildConfig) {
        // override sendFullHelp method
        return this.axonUtils.sendMessage(msg.channel, 'Full Help override');
    }

    // disabled
    /**
     * @param {import('axoncore').Command} command
     * @param {import('axoncore').CommandEnvironment} env
     */
    $sendHelp(command, env) {
        // override sendHelp method
        return this.axonUtils.sendMessage(env.msg.channel, `Help override for ${command.label}`);
    }
}

export default Client;
