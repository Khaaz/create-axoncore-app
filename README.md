# create-axoncore-app

This repo hosts a boilerplate for an [AxonCore](https://github.com/Khaazz/AxonCore) app.  

**DISCLAIMER:**  
This boilerplate is strongly opiniated about the way you should use AxonCore.  
AxonCore was designed to be used with such a file organisation and structure, however feel free to organise your application the way you want.

---

## Setup

By doing:

- `npm init axoncore-app [directory] [options]`  
- `yarn create axoncore-app [directory] [options]`

You can create a default boilerplate with all necessary files and folder organisation to build really fast an AxonCore bot.

You can pass several options, all of them including specifying install location are optional:
- `[directory]`: The directory of which the AxonCore project should be installed. If this is omitted, this defaults to the directory you ran the command in.
- `--lib`, `--library` or `-l`: to specify the library you want to use. `eris`, `discordjs`.
- `--type` or `-t`: to specify the module system you want to use. `commonjs`, `esm`, `typescript` / `ts`.

Any options you do not specify will be prompted for you to select.

### Examples 
`yarn create ./ axoncore-app --lib eris`  
`yarn create axoncore-app -l discordjs --type esm`  
`npm init axoncore-app -t commonjs`  
`npm init ./my-axoncore-project axoncore-app`

---

## Contributions

Feel free to contribute to improve this boilerplate. It has the purpose to be simple but to contain all default files and structure needed.
