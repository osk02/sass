module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    src: 'assets/sass/index.scss',
                    dest: 'assets/css/index.css'
                }]
            }
        }
    });
    // Load Plugins
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Register Tasks
    // grunt.registerTask('run', function() {
    //     console.log('Task is running...');
    // });

    // grunt.registerTask('sleep', function() {
    //     console.log('Task is sleeping...');
    // });

    // grunt.registerTask('all', ['run', 'sleep']);
    grunt.registerTask('default', ['sass']);
};