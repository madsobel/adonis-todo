'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/', 'TasksController.index')
Route.get('tasks/create', 'TasksController.create')
Route.post('tasks', 'TasksController.store')
Route.put('tasks/:id', 'TasksController.update')
Route.get('tasks/completed', 'TasksController.completed')
Route.delete('tasks/:id', 'TasksController.destroy')