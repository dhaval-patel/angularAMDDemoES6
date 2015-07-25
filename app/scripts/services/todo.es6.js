'use strict';

/**
 * @ngdoc function
 * @name angularAmddemoApp.service:TodoService
 * @description
 * # TodoService
 * 
 */
import {app} from 'app';

// Definition
class TodoService {
	constructor ($q) {
		this.todos = [];
		this.$q = $q;
	}

	save (todo) {
		this.todos.push({
			id: this.todos.lenth,
			todo: todo
		});

		var def = this.$q.defer();
		def.resolve();
		return def.promise;
	}

	get () {
		var def = this.$q.defer();
		def.resolve(this.todos);
		return def.promise;
	}

	delete  (todo) {
		this.todos.splice(this.todos.indexOf(todo), 1);
		var def = this.$q.defer();
		def.resolve(this.todos);
		return def.promise;
	}

	static $inject : ['$q'];
}

// Injection to Angular Scope
	app.service('TodoService', TodoService);