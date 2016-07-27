module.exports = function (grunt) {

  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

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
    }, // Concat

    "uglify": {
      "target": {
        "files": {
          "build/js/script.js": [".tmp/js/script.js"]
        }
      }
    }, // Uglify

    "clean": {
      "tmp": ['.tmp/']
    }, // Clean

    "connect": {
      "server": {
        "options": {
          "hostname": 'localhost',
          "port": '8080',
          "base": 'build',
          "livereload": true
        }
      }
    }, // Connect

    "watch": {
      "options": {
        "spawn": false,
        "livereload": true
      },
      "scripts": {
        "files": ['src/**/*.js'],
        "tasks": ['concat', 'uglify', 'clean']
      },
      "triggerReload": {
        "files": ['build/**/*']
      }
    } // Watch
  });

  // Register Tasks
  grunt.registerTask('default', ['concat', 'uglify', 'clean', 'connect', 'watch']);
  grunt.registerTask('build', ['concat', 'uglify', 'clean']);
  grunt.registerTask('live', ['connect', 'watch']);

};
