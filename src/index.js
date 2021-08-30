#! /usr/bin/env node
import remove from "./commands/remove";
import markDone from './commands/markDone';
import {Command, Option} from "commander";

import list from "./commands/list";

import boxen from "boxen";

import chalk from "chalk";

import add from "./commands/add";

const program = new Command();

const boxenOptions = {
    padding: {
        top: 0,
        bottom: 0,
        left: 5,
        right: 5
    },
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
};

program
    .addHelpText('beforeAll', boxen(chalk.green('Welcome'), boxenOptions))

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
    .arguments('[indexs...]')
    .option('-a, --all', 'Remove all task from list.')
    .description('remove a TODO task')
    .action(remove)

program
    .command('mark-done')
    .description('Mark commands done')
    .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
    .action(markDone)


program.parse(process.argv);