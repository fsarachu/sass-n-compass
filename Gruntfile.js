module.exports = function (grunt) {

  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Config Tasks
  grunt.initConfig({
    "concat": {
      "scripts": {
        "dist": {
          "src": ['src/js/*.js'],
          "dest": 'build/js/script.js'
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
  grunt.registerTask('default', ['concat','uglify']);

};