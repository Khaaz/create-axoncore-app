const Bot = require('./Bot');
const conf = require('./configs/customConf.json');

if (conf.db === 1) { // eslint-disable-line no-magic-numbers
    try {
        const mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost/db', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            autoReconnect: true,
        } )
            .then( () => {
                Bot.Logger.notice('Connected to DataBase.');
            } )
            .catch(err => {
                Bot.Logger.emerg(`Could NOT connect to DataBase.\n${err.stack}`);
            } );
    } catch (e) {
        Bot.Logger.emerg(`Could NOT connect to DataBase.\n${e.stack}`);
    }
}

Bot.start();

Bot.Logger.notice('=== ONLINE ===');
