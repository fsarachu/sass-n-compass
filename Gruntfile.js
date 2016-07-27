module.exports = function (grunt) {

  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
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

    "compass": {
      "dev": {
        "options": {
          "config": 'config.rb'
        }
      }
    }, // Compass

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
        "files": ['src/js/*.js'],
        "tasks": ['concat', 'uglify', 'clean']
      },
      "sass": {
        "files": ['src/sass/*.scss'],
        "tasks": ['compass']
      },
      "html": {
        "files": ['build/*.html']
      }
    } // Watch
  });

  // Register Tasks
  grunt.registerTask('default', ['concat', 'compass', 'uglify', 'clean', 'connect', 'watch']);
  grunt.registerTask('build', ['concat', 'compass', 'uglify', 'clean']);
  grunt.registerTask('live', ['connect', 'watch']);

};
