module.exports = function(grunt) {

    /***** CONFIGURATION *****/
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Generate JS documentation
        jsdoc: {
            frontend: {
                options: {
                    destination: './doc/frontend',
                    template : 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template',
                    configure : './doc/jsdoc.frontend.conf.json'
                },
                src: ['./public/**/*.js']
            },
            backend: {
                options: {
                    destination: './doc/backend',
                    template : 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template',
                    configure : './doc/jsdoc.backend.conf.json'
                },
                src: ['./app/**/*.js', './server.js', 'README.md']
            }
        }

    });


    /***** LOAD TASKS *****/
    grunt.loadNpmTasks('grunt-jsdoc');


    /***** REGISTER TASKS *****/
    
}
