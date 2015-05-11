#!/usr/bin/env node

'use strict';

var program = require('commander');
var pkg = require('./package.json');

program
  .version(pkg.version)
  .command('sum <number1> <number2>')
  .description('Sum two numbers')
  .action(function sum(number1, number2) {
    console.log(Number(number1) + Number(number2));
  });
program.parse(process.argv);
