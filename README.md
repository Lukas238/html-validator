#Email & HTML Validator
This is an internal project for MRM-BA for validate the emails made by the front-end team.

###Authors & contributors
- Juan Pablo Ferrari  [(juanpiwi)](https://github.com/juanpiwi): <juanpablo.ferrari@mrm-mccann.com>
- Pablo Galano  [(pablogalano)](https://github.com/pablogalano): <pablo.galano@mrm-mccann.com>


##Requirements
To run & work on this project you need to have the following installed:
- [Node.js](http://nodejs.org/)
- [EditorConfig](http://editorconfig.org/) (if your text editor have support for this)


##Installation & Configuration
Please, follow this steps to install & configure all you need before starting to work on the project:

1. Run this to install all the node_modules:
```
$ npm install
```
2. Set your configurations on file /config/config.{{NODE_ENV}}.js (where {{NODE_ENV}} is the environment in which you work, and takes one of this values: "local", "development", "stage" or "production")


###Execution
- Windows:
```
$ npm start
```
- Unix:
```
$ NODE_ENV=local node server.js
```


###Test
- Windows:
```
$ npm test
```
- Unix:
```
$ make test
```


###Generate Documentation
- For Application documentation:
```
$ grunt jsdoc:backend
```
- For front-end (public) documentation:
```
$ grunt jsdoc:frontend
```

###Debugger
```
$ npm run-script debug
```

###Debugging Express
- Windows:
```
$ set DEBUG=express:* & node server.js
```
- Unix:
```
$ DEBUG=express:* node server.js
```
