module.exports = function (grunt) {
    'use strict';

    var expandFiles = function (glob) {
        return grunt.file.expand({
            filter: 'isFile'
        }, glob);
    };

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
                src: ['./src/js/demo/App.js'],
                dest: 'dist/demo.js',
                options: {
                    alias: ["./src/js/demo/App.js:DemoApp"],
                },
            },

            testSources: {
                src: [ 'src/**/*.js', ],
                dest: 'dist/test_sources.js',
                options: {
                    require: expandFiles([ './src/**/*.js', ])
                }
            },

            test: {
                src: [
                    'tests/spec/**/*.js',
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
                src: 'dist/test_sources.js'
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

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jasmine-node');

    grunt.registerTask('build-demo', ['jshint', 'browserify', 'jasmine:demo', 'uglify:demo']);
};
