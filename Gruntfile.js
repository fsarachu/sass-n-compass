module.exports = function (grunt) {

  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Config Tasks
  grunt.initConfig({
    "concat": {
      "scripts": {
        "options": {
          "separator": ';'
        },
        "files": {
          '.tmp/js/script.js': ['src/js/*.js']
        }
      }
    },

    "uglify": {
      "target": {
        "files": {
          "build/js/script.js": [".tmp/js/script.js"]
        }
      }
    },

    "clean": {
      "tmp": ['.tmp/']
    }
  });

  // Register Tasks
  grunt.registerTask('default', ['concat', 'uglify', 'clean']);

};
