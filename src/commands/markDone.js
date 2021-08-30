const conf = new (require('conf'))()
const chalk = require('chalk')

function markDone(tasks,options) {
    let todosList = conf.get('todo-list')

    if (tasks.some(isNaN)) {
        console.log(chalk.red.bold(`Task must be numeric !`));
        return false;
    }

    if (todosList) {
        todosList = todosList.map((task, index) => {
            if (!options.all) {
                if (tasks.indexOf(index.toString()) !== -1) {
                    console.log(
                        chalk.green.bold(`Task ${ chalk.reset.bold.cyan( task.text ) } have been marked as done successfully!`)
                    )
                    //mark only specified tasks by user as done
                    task.done = true
                }
            } else {
                console.log(
                    chalk.green.bold(`Task ${ chalk.reset.bold.cyan( task.text ) } have been marked as done successfully`)
                )
                //if the user didn't specify tasks, mark all as done
                task.done = true
            }
            return task
        });

    }else{
        todosList = []
    }

    //set the new todo-list
    conf.set('todo-list', todosList)
    //show the user a message
}

module.exports = markDone