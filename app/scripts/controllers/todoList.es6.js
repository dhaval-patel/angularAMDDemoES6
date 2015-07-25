'use strict';

/**
 * @ngdoc function
 * @name angularAmdes6App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAmdes6App
 */

import {app} from 'app';
import {} from 'todoService';

// Definition
class TodoListCtrl {
	constructor (todoService) {
		this.todos = [];
		this.todoService = todoService;

		// load todos
		this.loadTodo();
	};

	loadTodo () {
		this.todoService.get().then( (todos) => {
			Array.prototype.push.apply(this.todos, todos);
		});
	}

	deleteTodo (todo) {
		this.todoService.delete(todo).then( (todos) => {
			this.todos.length = 0;
			Array.prototype.push.apply(this.todos, todos);
		});
	}

	// Service Injection
	static get $inject () {
		return ['TodoService'];
	}
} 

app.controller('TodoListCtrl', TodoListCtrl);

