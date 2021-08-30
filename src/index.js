#! /usr/bin/env node
import remove from "./commands/remove";
import markDone from './commands/markDone';
import {Command} from "commander";

import list from "./commands/list";

import add from "./commands/add";

const program = new Command();

/**
* for dev : sudo npm install -g ./ to link scope to global
* */

program.showHelpAfterError('(add --help for additional information)');

program
    .command('list')
    .description('List all the TODO tasks')
    .action(list)

program
    .command('add <task>')
    .description('Add a new TODO task')
    .action(add)

program
    .command('remove')
    .arguments('[tasks...]')
    .usage("1 2 3")
    .option('-a, --all', 'Remove all task from list.')
    .description('remove a TODO task')
    .action(remove)

program
    .command('mark-done')
    .usage("1 2 3")
    .description('Mark commands done')
    .arguments('[tasks...]')
    .option('-a, --all', 'Mark done all task from list.')
    .action(markDone)


program.parse(process.argv);