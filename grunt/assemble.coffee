module.exports = (grunt) ->
  grunt.config "assemble",
    options:
      partials: "templates/partials/*"
      data: "data/*.yml"
      layoutdir: "templates/layouts/"
      layout: ['default.hbs']
      helpers: "./lib/handlebars-helpers/**/*.js"
    files:
      expand: true
      cwd: 'templates/pages'
      src: ['*.hbs']
      dest: './dist/'

  grunt.loadNpmTasks 'assemble'
