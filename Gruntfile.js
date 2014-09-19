module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          keepalive: true,
          port: 9001,
          base: 'app'
        }
      }
    },

    clean: ["app/public/dist", "app/public/lib"],
    copy: {
      options: {
        expend: true,
        flatten: true
      },

      angular: {
        expand: true,
        flatten: true,
        cwd: 'bower_components/',
        src: ['**/angular*.min.js'],
        dest: 'app/public/lib/angular',
        filter: 'isFile'
      },

      underscore: {
        expand: true,
        cwd: 'bower_components/underscore',
        src: ['underscore.js'],
        dest: 'app/public/lib/underscore/',
      }
    },

    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }
    },

    uglify: {
      build: {
        options: {
          sourceMap: true,
          sourceMapName: 'app/public/dist/app.map'
        },

        files: {
          'app/public/dist/app.min.js': ['src/main.js',
            'src/controllers/*.js',
            'src/directives/*.js',
            'src/models/*.js',
            'src/filters/*.js',
            'src/services/*.js']
        }
      }
    },

    jshint: {
      target: {
        options: {
          "eqeqeq": true,
          "strict": true
        },
        src: ['src/**/*.js']
      }
    },

    concat: {
      options: {
        separator: '\n',
      },

      mock: {
        src: ['src/main.js',
          'src/controllers/*.js',
          'src/directives/*.js',
          'src/models/*.js',
          'src/filters/*.js',
          'src/services/*.js',

          'bower_components/angular-mocks/angular-mocks.js',
          'bower_components/uri.js/src/URI.js',
          'mock/module.js',
          'mock/**/*.js'],
        dest: 'app/public/dist/app.min.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('dev', ['jshint', 'karma', 'clean', 'concat:mock',
    'copy', 'connect']);
  grunt.registerTask('deploy', ['jshint', 'karma', 'clean', 'uglify', 'copy']);
  grunt.registerTask('default', ['dev']);
};
