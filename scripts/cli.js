#!/usr/bin/env node

const path = require('path');
const shell = require('shelljs');

shell.config.fatal = true;

const types = {
    'esm': 0,
    'commonjs': 1,
}

const [,, ...args] = process.argv;

console.log('=== Starting project initialisation ===');

let typeName = 'esm';
let appName = null;

for (let i = 0; i < args.length; i++) {
    if (args[i] === '-t' || args[i] === '--type') {
        typeName = args[i + 1];
        i++;
    } else {
        appName = args[i];
    }
}

const type = types[typeName] || 0;

const projectLocation = appName
    ? `${process.cwd()}/${appName}`
    : process.cwd();

const rootLocation = path.resolve(
    __dirname, '..', 
    type === 0 ? 'config-esm/*' : 'config-commonjs/*'
);

console.log(`Selecting source: ${typeName}`);
console.log(`Creating project files at: ${projectLocation}`);

try {
    shell.cp(
        '-Rn',
        rootLocation,
        projectLocation
    );
} catch (err) {
    shell.mkdir('-p', projectLocation);
    console.log('Creating folder...');
    shell.cp(
        '-Rn',
        rootLocation,
        projectLocation
    );
}

console.log('=== Project initialised ===');
