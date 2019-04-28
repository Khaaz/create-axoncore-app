import Client from './Client';
import { Client } from 'eris';

import axonConf from './configs/customConf.json';
import tokenConf from './configs/tokenConf.json';
import templateConf from './configs/templateConf.json';

import CustomUtils from './CustomUtils';

const AxonOptions = {
    axonConf,
    templateConf,
    tokenConf,

    utils: CustomUtils,
};

const client = new Client(
    tokenConf.bot.token,
    {
        autoreconnect: true,
        defaultImageFormat: 'png',
        defaultImageSize: 512,
        disableEveryone: true,
        getAllUsers: true,
        messageLimit: 100,
        restMode: true,
    }
);
const Bot = new Client(
    client,
    AxonOptions
);

export default Bot;
