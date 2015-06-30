module.exports = function(grunt) {

    "use strict"

    // Configuração das tarefas
    // ---------------------------------------
    grunt.initConfig({

        // Tarefa watch
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: "js/*.js"
                // tasks: ["uglify", "jshint"]
            },
            html: {
                files: "./*.html"
            }
        },

        // Tarefa connect
        connect: {
            server: {
                options: {
                    port: 35729,
                    base: ".",
                    hostname: "localhost",
                    livereload: true,
                    open: true
                }
            }
        }

    });


    // Carregando os plugins
    // ---------------------------------------
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');


    // Registrando a tarefa customizada
    // ---------------------------------------
    grunt.registerTask( "default", [ "connect", "watch" ]);

};