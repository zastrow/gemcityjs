'use strict';

const chokidar = require('chokidar');
const shell = require('shelljs');

chokidar.watch('sass/**/!(_split)*.scss').on('change', () => {
  shell.exec('npm run sass');
});

chokidar.watch([
  'pages/**/*',
  'partials/**/*',
  'templates/**/*',
  'data/**/*'
]).on('change', () => {
  shell.exec('npm run patterns');
});

chokidar.watch('assets/**/*').on('change', () => {
  shell.exec('npm run copy');
});
