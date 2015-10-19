module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks 
     
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                stage: 0,
                "experimental": true
            },
            dist: {
                files: [{
                  expand: true,     // Enable dynamic expansion.
                  cwd: 'scripts/third_party/react-native-tab-navigator/',      // Src matches are relative to this path.
                  src: ['*.js'],
                  dest: 'build/react-native-tab-navigator/',   // Destination path prefix.
                  ext: '.js',   // Dest filepaths will have this extension.
                  extDot: 'first'   // Extensions in filenames begin after the first dot
                }]
            }
        }
    });
     
    grunt.registerTask('default', ['babel']);

};