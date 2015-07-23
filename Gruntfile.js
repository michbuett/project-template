'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            all: {
                files: ['src/**/*.*', 'test/**/*.*'],
                tasks: ['default']
            },
        },

        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                jshintrc: '.jshintrc',
            }
        },

        jasmine_node: {
            specNameMatcher: "Spec",
            specFolders: ["test/spec/common"],
            projectRoot: "test/spec/node",
            forceExit: true,
        },

        browserify: {
            options: {
                transform: ['babelify'],
                browserifyOptions: {
                    debug: true,
                },
            },

            demo: {
                src: ['./src/demo/App.js'],
                dest: 'dist/demo.js',
                options: {
                    alias: ["./src/demo/App.js:DemoApp"],
                },
            },

            test: {
                src: [
                    'test/spec/**/*.js',
                ],
                dest: 'dist/test_bundle.js',
                options: {
                    external: ['src/**/*.js'],
                }
            },
        },

        jasmine: {
            options: {
                specs: 'dist/test_bundle.js',
            },

            demo: {
                src: 'dist/demo.js'
            },
        },

        uglify: {
            demo: {
                files: {
                    'dist/demo.min.js': ['dist/demo.js']
                }
            },
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jasmine-node');

    // Default task.
    grunt.registerTask('default', ['jshint', 'jasmine_node', 'browserify', 'jasmine', 'uglify']);
};
