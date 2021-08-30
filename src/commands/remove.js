const conf = new (require('conf'))()
const chalk = require('chalk')

function remove(indexs, options) {
    let todosList = conf.get('todo-list')

    if (!todosList) {
        todosList = []
    }

    if (options.all) {
        conf.delete('todo-list');
    } else if (indexs) {

        try {
            indexs.forEach(index => {
                if (isNaN(index)) {
                    chalk.green.bold(`Task ${index} has been remove successfully!`)
                    throw new Error('index must is numeric!')
                } else {
                    todosList.splice(index, 1);
                }
            })
        } catch (e) {
            console.error(chalk.red.bold(e.message));
            return false;
        }

    }

    //set todos-list in conf
    conf.set('todo-list', todosList)

    //display message to user
    console.log(
        chalk.green.bold('Task has been remove successfully!')
    )
}

module.exports = remove