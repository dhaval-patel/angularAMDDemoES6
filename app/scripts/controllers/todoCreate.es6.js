'use strict';

/**
 * @ngdoc function
 * @name angularAmdes6App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularAmdes6App
 */
import {app} from 'app';
import {} from 'todoService';

class TodoCreateCtrl {
	constructor (todoService) {
		this.todo = '';
		this.todoService = todoService;
	}

	save () {
		this.todoService.save(this.todo).then(() => {
			this.todo = '';
		});
	}

	static get $inject () {
		return ['TodoService'];
	}
}

app.controller('TodoCreateCtrl', TodoCreateCtrl);
