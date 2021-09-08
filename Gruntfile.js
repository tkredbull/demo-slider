module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2
        },
        files: {
          "C:/AppServ/www/nhap/assets/css/main.css": "C:/AppServ/www/nhap/assets/less/main.less"
       
        }
      }
    },
    watch: {
      styles: {
        files: ['C:/AppServ/www/nhap/assets/less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};
