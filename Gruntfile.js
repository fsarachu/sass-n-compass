module.exports = function (grunt) {

  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Config Tasks
  grunt.initConfig({
    "concat": {
      "scripts": {
        "files": {
          'build/js/script.js': ['src/js/*.js']
        }
      }
    },

    "uglify": {
      "target": {
        "files": {
          "build/js/script.min.js": ["build/js/script.js"]
        }
      }
    }
  });

  // Register Tasks
  grunt.registerTask('default', ['concat', 'uglify']);

};