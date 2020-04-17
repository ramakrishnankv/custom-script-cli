#!/usr/bin/env node
const base = require('./src/tasks/cli-base');
const ssr = require('./src/tasks/cli-ssr');
const appModules = require('./src/constants/modules')

const [, , ...args] = process.argv;
const firstArg = args[0] || '';
let moduleName = appModules[0];

if (args.length > 0) {
  const mod = appModules.find((item) => {
    return item === firstArg;
  })
  if (mod) {
    moduleName = mod;
  }
}

console.log(moduleName);
switch (moduleName) {
  case 'base': base();
    break;
  case 'ssr': ssr();
    break;
  default: base();
    break;
}