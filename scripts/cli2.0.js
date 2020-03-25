const inquirer = require('inquirer');
const argv = require('minimist')(process.argv.slice(2), {
    alias: { lang: ['language', 'L'], lib: ['library', 'l'], type: 't' },
} );
const fs = require('fs-extra');
const path = require('path');

const typescript = ['typescript', 'ts'];
const javascript = ['javascript', 'js'];
const languages = [...typescript, ...javascript];
const libraries = [
    'eris',
    'discordjs',
    'discord.js',
];
const type = ['esm', 'commonjs'];

async function inquire() {
    /**
     * @type {{dir: String, lang: String, lib: String, type: String}}
     */
    const options = {
        dir: process.cwd(),
        lang: argv.lang ? argv.lang.toLowerCase() : null,
        lib: argv.lib ? argv.lib.toLowerCase() : null,
        type: typescript.includes(argv.lang && argv.lang.toLowerCase() ) ? 'esm' : (argv.type && argv.type.toLowerCase() ) || null,
    };

    const questions = await inquirer.prompt( [
        {
            name: 'lang',
            type: 'list',
            message: 'What language do you want your AxonCore project to be in?',
            choices: ['JavaScript', 'TypeScript'],
            when: () => !languages.includes(options.lang),
            filter: (input) => {
                if (input === 'TypeScript') {
                    options.type = 'esm';
                }
                return input.toLowerCase();
            },
        },
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
            choices: ['ESM (import/export)', 'CommonJS (require/exports)'],
            when: ( { lang } ) => !typescript.includes(lang || options.lang) && !type.includes(options.type),
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

    const folder = `${options.lib}-${options.lang === 'typescript' ? options.lang : options.type}`;
    console.log(`> Selecting source: ${folder}`);
    console.log(`> Creating project files at: '${options.dir}'. Please do not exit out of the program.`);

    if ( (await fs.readdir(options.dir) ).length) {
        console.warn('>>> Files exist in your directory. They may be overwritten <<<');
    }

    await fs.copy(`${path.resolve(__dirname, '..')}/${options.lib}/${folder}`, options.dir);
    console.log('=== Project initialised ===');
}

run();
