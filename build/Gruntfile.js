module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    
        less: {
            development: {
                options: {
                    paths: ['less'],
                    compress: false,
                    cleancss: true,
                    dumpLineNumbers: 'comments'
                },
                files: {
                    '../themes/traderhub/css/main.css': '../themes/traderhub/less/main.less',
                }
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },

            less: {
                files: [
                    '../themes/traderhub/less/**/*.less',
                ],
                tasks: ['less']
            },
        },
    });

    // load npm modules
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // register tasks
    grunt.registerTask('default', [ 'less', 'watch']);
    grunt.registerTask('jenkins', [ 'less']);
};
