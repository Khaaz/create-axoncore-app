#!/usr/bin/env node

const path = require('path');
const shell = require('shelljs');

const types = {
    'esm': 0,
    'commonjs': 1,
}

const [,, ...args] = process.argv;

let type = 0;
let appName = null;

for (let i = 0; i < args.length; i++) {
    if (args[i] === '-t' || args[i] === '--type') {
        type = types[args[i + 1]] || 0;
    } else {
        appName = args[i];
    }
}

const projectLocation = process.cwd();
const rootLocation = path.resolve(
    __dirname, '..', 
    type === 0 ? 'config-esm' : 'config-commonjs'
);


shell.cp(
    '-R',
    rootLocation,
    appname ? `${projectLocation}/${appname}` : projectLocation
);