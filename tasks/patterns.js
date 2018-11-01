const downpour = require('@sparkbox/downpour');
const hbsHelpers = require('handlebars-helpers');

const helpers = {
  add: hbsHelpers().add,
  subtract: hbsHelpers().subtract,
  divide: hbsHelpers().divide,
  is: hbsHelpers().is,
  eq: hbsHelpers().eq,
  multiply: hbsHelpers().multiply,
  floor: hbsHelpers().floor,
  ceil: hbsHelpers().ceil,
  round: hbsHelpers().round,
  sum: hbsHelpers().sum,
  avg: hbsHelpers().avg,
  markdown: hbsHelpers().markdown,
  default: hbsHelpers().default,
};

const downpourOptions = {
  src: {
    data: {
      basedir: './data',
      glob: 'data/**/*.yaml',
    },
    pages: {
      basedir: './pages',
      glob: 'pages/**/*.{hbs,md,html}',
    },
    patterns: {
      basedir: './patterns',
      glob: 'partials/**/*.{hbs,md,yaml,html}',
    },
    templates: {
      basedir: './templates',
      glob: 'templates/**/*.{hbs,md,html}',
    }
  },
  dest: {
    pages: './dist/',
    patterns: './.tmp/partials',
    css: './.tmp/css',
    js: './.tmp/js',
  },
  helpers: {
  }
};

Object.assign(downpourOptions, { helpers });
downpour(downpourOptions);
