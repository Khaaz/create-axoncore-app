#!/usr/bin/env node

const inquirer = require('inquirer');
const argv = require('minimist')(process.argv.slice(2), {
    alias: { lib: ['library', 'l'], type: 't' },
} );
const fs = require('fs-extra');
const path = require('path');

const libraries = [
    'eris',
    'discordjs',
    'discord.js',
];
const type = [
    'esm',
    'commonjs',
    'typescript',
];

async function inquire() {
    /**
     * @type {{dir: String, lib: String, type: String}}
     */
    const options = {
        dir: require('path').resolve(argv._[0] || process.cwd() ),
        lib: argv.lib ? argv.lib.toLowerCase() : null,
        type: argv.type && argv.type.toLowerCase() === 'ts' ? 'typescript' : (argv.type && argv.type.toLowerCase() ) || null,
    };

    const questions = await inquirer.prompt( [
        {
            name: 'lib',
            type: 'list',
            message: 'Which library do you want to use?',
            choices: [
                'Eris',
                'Discord.JS',
                {
                    name: 'Detritus',
                    disabled: 'Not currently available on AxonCore!',
                },
            ],
            when: () => !libraries.includes(options.lib),
            filter: (input) => input.toLowerCase().replace('.', ''),
        },
        {
            name: 'type',
            type: 'list',
            message: 'What kind of modules do you want to use?',
            choices: [
                'ESM (import/export) - JavaScript',
                'CommonJS (require/exports) - JavaScript',
                'TypeScript',
            ],
            when: () => !type.includes(options.type),
            filter: (input) => input.split(' ')[0].toLowerCase(),
        },
    ] );
    for (const x in questions) {
        options[x] = questions[x];
    }
    return options;
}

async function run() {
    console.log('=== Starting project initialisation ===');
    const options = await inquire();

    const folder = `${options.lib}-${options.type}`;
    console.log(`> Selecting source: ${folder}`);
    console.log(`> Creating project files at: '${options.dir}'. Please do not exit out of the program.`);

    if ( (await fs.readdir(options.dir) ).length) {
        console.warn('>>> Files exist in your directory. They may be overwritten <<<');
    }

    await fs.copy(`${path.resolve(__dirname, '..')}/${options.lib}/${folder}`, options.dir);
    console.log('=== Project initialised ===');
}

run();
