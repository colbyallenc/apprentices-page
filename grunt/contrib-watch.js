module.exports = function(grunt) {
  grunt.config("watch", {
    stylesheets: {
      files: "scss/**/*",
      tasks: "compass:dev"
    },
    livereload: {
      files: "dist/static/css/**/*.css",
      options: {
        livereload: true
      }
    },
    pages: {
      files: "patterns/pages/**/*.html",
      tasks: ["build"],
      options: {
        livereload: true
      }
    },
    javascript: {
      files: ["coffee/*", "js/*.js", "!js/_bower-libs.js", "js/other-libs/*.js", "js/other-js/*.js"],
      tasks: "javascript:dev",
      options: {
        livereload: true
      }
    },
    specs: {
      files: ["specs/*.coffee"],
      tasks: ["coffee:jasmine_specs", "jasmine"]
    },
    publicDirectory: {
      files: ["public/**/*"],
      tasks: "default"
    }
  });
  return grunt.loadNpmTasks('grunt-contrib-watch');
};
