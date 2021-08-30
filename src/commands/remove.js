const conf = new (require('conf'))()
const chalk = require('chalk')

function remove(tasks, options) {
    let todosList = conf.get('todo-list')

    if (tasks.some(isNaN)) {
        console.log(chalk.red.bold(`Task must be numeric !`));
        return false;
    }
    if (todosList) {
        todosList = todosList.filter((task, index) => {
            if (!options.all) {
                if (tasks.indexOf(index.toString()) !== -1) {
                    //mark only specified tasks by user as done
                    console.log(
                        chalk.green.bold(`Task ${chalk.reset.bold.cyan(task.text)} has been remove successfully!`)
                    )
                    return false

                }
            } else {
                console.log(
                    chalk.green.bold(`Task ${chalk.reset.bold.cyan(task.text)} has been remove successfully!`)
                )
                //if the user didn't specify tasks, mark all as done
                return false
            }
            return task
        });
    } else {
        todosList = []
    }

    //set the new todo-list
    conf.set('todo-list', todosList)
    //show the user a message
}

module.exports = remove