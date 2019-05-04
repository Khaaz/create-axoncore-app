# create-axoncore-app

This repo hosts a boilerplate for an [AxonCore](https://github.com/Khaazz/AxonCore) app.  

**DISCLAIMER:**  
This boilerplate is strongly opiniated about the way you should use AxonCore.  
AxonCore was designed to be used with such a file organisation and structure, however feel free to organise your application the way you want.  

## Setup
By doing:   
- `npm init axoncore-app`
or  
- `yarn create axoncore-app`
You can create a default boilerplate with all necessary files and folder organisation to build really fast an AxonCore bot.  

You can pass an option: 
- `--type` or `t`: to specify the module system you want to use;  
Then you append the type itself, either `esm` or `commonjs`. By default, it will use `esm`.  
- `appName`: the directory where to create the app. By defaut it will create the application directly in the current directory (none specified).

So for instance:  
`yarn create axoncore-app --type commonjs`  
`yarn create axoncore-app -t esm my-app`  
`npm init axoncore-app my-app`  

## Contributions
Feel free to contribute to improve this boilerplate. It has the purpose to be simple but to contain all default files and structure needed.
