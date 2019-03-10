#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package');
const { build, init } = require('../lib');

program.version(pkg.version);

program.command('build')
  .alias('b')
  .description('Build image from Dockerfile')
  .action(build);

program.command('init')
  .alias('i')
  .description('Geneate Dockerfile, .dockerignore and server conf')
  .action(init);


program.parse(process.argv);
