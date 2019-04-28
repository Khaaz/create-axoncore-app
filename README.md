# create-axoncore-app

This repo hosts a boilerplate for an [AxonCore](https://github.com/Khaazz/AxonCore) app.  

By doing:   
- `npm init axoncore-app`
or  
- `yarn create axoncore-app`
You can create a default boilerplate with all necessary files and folder organisation to build really fast an AxonCore bot.  

You can pass an option: 
- `--type` or `t`: followed with the type, either `esm` or `commonjs`. By default, it will use `esm`.  
- `appName`: the directory where to create the app. By defaut it will create the application directly in the current directory.

So for instance:  
`yarn create axoncore-app --type commonjs`  
`yarn create axoncore-app -t esm my-app`  
`npm init axoncore-app my-app`  
