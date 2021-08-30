# TODOS-CLI

A CLI tool for TODO LIST using Node.js.

## Installation

Install the package globally on your machine:

```
npm i -g @since1997/todo-cli
```

## Usage

### 1. To view the TODO list:

```
todos list
```

### 2. To add a TODO task:

```
todos add <task>
```

For example:

```
todos add "Make Dinner"
```

If the task text has spaces either put quotations around it or escape the spaces. If it doesn't, quotations are not necessary.

3. Mark tasks as done:

```
todos mark-done [tasks...] [--all]
```

Example:

```
todos mark-done 1 2
```

where `-a, --all` will mark down all TODO item in list

4. Delete TODO task

```
todos remove [indexs...] [--all]
```

Example: 

```
todos remove 1 2
```

where `-a, --all` will mark down all TODO item in list