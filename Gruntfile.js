module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                // the files to concatenate
                src: ['EmberApp/js/**/*.js'],
                // the location of the resulting JS file
                dest: 'public/scripts/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'public/scripts/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        handlebars: {
            all: {
                files: {
                    "public/scripts/templates.js": ["EmberApp/templates/**/*.hbs"]
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify', 'handlebars']);

};