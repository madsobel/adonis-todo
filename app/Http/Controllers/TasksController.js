'use strict'

const Task = use('App/Model/Task')

class TasksController {

  * index (request, response) {
    const tasks = yield Task.query().where('completed', false).fetch()
    yield response.sendView('tasks.index', {tasks: tasks.toJSON()})
  }

  * create (request, response) {
    yield response.sendView('tasks.create')
  }

  * store (request, response) {
    const taskData = request.only('task')
    yield Task.create(taskData)
    response.redirect('/')
  }

  * update (request, response) {
    const task = yield Task.find(request.param('id'))
    task.completed = true
    yield task.save()
    response.redirect('/')
  }

  * completed (request, response) {
    const tasks = yield Task.query().where('completed', true).fetch()
    yield response.sendView('tasks.index', {tasks: tasks.toJSON()})
  }

  * destroy (request, response) {
    const task = yield Task.find(request.param('id'))
    yield task.delete()
    response.redirect('/')
  }

}

module.exports = TasksController