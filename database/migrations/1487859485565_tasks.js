'use strict'

const Schema = use('Schema')

class TasksTableSchema extends Schema {

  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.string('task')
      table.boolean('completed').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }

}

module.exports = TasksTableSchema