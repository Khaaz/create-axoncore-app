#!/usr/bin/env node

const path = require('path');
const shell = require('shelljs');

shell.config.fatal = true;

const libs = ['eris', 'discordjs'];
const types = ['commonjs', 'esm'];

const options = {
    location: process.cwd(),
    lib: null,
    type: 'commonjs',
    token: '',
    db: 0,
};

const flags = {
    '-l': 'lib',
    '--lib': 'lib',
    '-t': 'type',
    '--type': 'type',
};

function parseArgs(args) {
    for (let i = 0; i < args.length; i++) {
        const flag = flags[args[i]];

        if (flag) {
            options[flag] = args[i + 1];
            i++;
        } else {
            options.location = `${options.location}/${args[i]}`;
        }
    }
}

const [
    ,, ...args
] = process.argv;

console.log('=== Starting project initialisation ===');

parseArgs(args);

// exit if no no lib
if (!options.lib || !libs.includes(options.lib) ) {
    console.error(`Please specify a valid library. Pick one among: ${libs.join(', ')}.`);
    process.exit(0);
}

if (!types.includes(options.type) ) {
    console.error(`Please specify a valid module structure type. Pick one among: ${types.join(', ')}. Default to 'commonjs'.`);
    options.type = 'commonjs';
}

const root = path.resolve(__dirname, '..');
const source = path.resolve(
    root,
    options.lib,
    `${options.lib}-${options.type}/*`,
);

console.log(`> Selecting source: ${options.lib}-${options.type}`);
console.log(`> Creating project files at: ${options.location}`);

try {
    shell.cp(
        '-Rn',
        source,
        options.location,
    );
} catch (err) {
    shell.mkdir('-p', options.location);
    console.log('Creating folder...');
    shell.cp(
        '-R',
        source,
        options.location,
    );
}

console.log('> Creating configs folder...');
shell.cp(
    '-R',
    `${root}/global/configs`,
    `${options.location}/src/`,
);
shell.cp(
    '-R',
    `${root}/global/config-${options.lib}.json`,
    `${options.location}/src/configs/config.json`,
);

console.log('> Creating start scripts...');
shell.mkdir('-p', `${options.location}/scripts`);
shell.cp(
    '-R',
    `${root}/global/scripts/start-${options.type}.js`,
    `${options.location}/scripts/start.js`,
);

// gitignore
shell.cp(
    '-R',
    `${root}/global/gitignore`,
    `${options.location}/.gitignore`,
);
// eslintrc
shell.cp(
    '-R',
    `${root}/global/eslintrc.json`,
    `${options.location}/.eslintrc.json`,
);

console.log('=== Project initialised ===');
