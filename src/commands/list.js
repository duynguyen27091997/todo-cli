
const conf = new (require('conf'))()
const chalk = require('chalk')
const boxen = require("boxen");

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

function list () {
    const todoList = conf.get('todo-list')

    console.log(boxen(chalk.green('TODO LIST'), boxenOptions))

    if (todoList && todoList.length) {
        console.log(
            chalk.blue.bold('Tasks in green are done. Tasks in yellow are still not done.')
        )
        todoList.forEach((task, index) => {
            if (task.done) {
                console.log(
                    chalk.greenBright(`${index}. ${task.text}`)
                )
            } else {
                console.log(
                    chalk.yellowBright(`${index}. ${task.text}`)
                )
            }
        })
    } else {
        console.log(
            chalk.red.bold('You don\'t have any tasks yet.')
        )
    }
}

module.exports = list