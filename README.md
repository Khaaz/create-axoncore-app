# create-axoncore-app

This repo hosts a boilerplate for an [AxonCore](https://github.com/Khaazz/AxonCore) app.  

**DISCLAIMER:**  
This boilerplate is strongly opiniated about the way you should use AxonCore.  
AxonCore was designed to be used with such a file organisation and structure, however feel free to organise your application the way you want.

---

## Setup

By doing:

- `npm init axoncore-app`  
- ~~`yarn create axoncore-app`
You can create a default boilerplate with all necessary files and folder organisation to build really fast an AxonCore bot.~~ Due to an issue with Yarn, the boilerplate will error out when you try to use it. Please click [here](https://github.com/yarnpkg/yarn/issues/7983) for more details. You will still be able to use NPM to complete setup.

You can pass several options, all of them are optional:

- `--lib`, `--library` or `-l`: to specify the library you want to use. `eris`, `discordjs`.
- `--type` or `-t`: to specify the module system you want to use. `commonjs`, `esm`, `typescript` / `ts`.

Any options you do not specify will be prompted for you to select.

### Examples 
`yarn create axoncore-app --lib eris`  
`yarn create axoncore-app -l discordjs --type esm`  
`npm init axoncore-app -t commonjs`  
`npm init axoncore-app`

---

## Contributions

Feel free to contribute to improve this boilerplate. It has the purpose to be simple but to contain all default files and structure needed.
