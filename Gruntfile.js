module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options:{
                    style:'expanded'
                },
                files: {
                    'dist/styles/style.css' : 'src/style.scss'
                }
            },
            production: {
                options:{
                    style:'compressed',
                    sourcemap: 'none'
                },
                files: {
                    'dist/styles/style.css' : 'src/style.scss'
                }
            }
        },
        autoprefixer:{
            dist:{
                files:{
                    'dist/styles/style.css':'dist/styles/style.css'
                }
            }
        },
        watch: {
            css: {
                files: 'src/**/*.scss',
                tasks: ['sass:dist', 'autoprefixer']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default', ['watch'] );
    grunt.registerTask('build', ['sass:production', 'autoprefixer'])
}
