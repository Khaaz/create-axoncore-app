const Client = require('./Client');
const { ErisClient } = require('eris');

const axonConf = require('./configs/customConf.json');
const tokenConf = require('./configs/tokenConf.json');
const templateConf = require('./configs/templateConf.json');

const CustomUtils = require('./CustomUtils');

const AxonOptions = {
    axonConf,
    templateConf,
    tokenConf,

    utils: CustomUtils,
};

const client = new ErisClient(
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

module.exports = Bot;
