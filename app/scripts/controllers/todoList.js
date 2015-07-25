define(['exports', 'app', 'todoService'], function (exports, _app, _todoService) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	// Definition

	var TodoListCtrl = (function () {
		function TodoListCtrl(todoService) {
			_classCallCheck(this, TodoListCtrl);

			this.todos = [];
			this.todoService = todoService;

			// load todos
			this.loadTodo();
		}

		_createClass(TodoListCtrl, [{
			key: 'loadTodo',
			value: function loadTodo() {
				var _this = this;

				this.todoService.get().then(function (todos) {
					Array.prototype.push.apply(_this.todos, todos);
				});
			}
		}, {
			key: 'deleteTodo',
			value: function deleteTodo(todo) {
				var _this2 = this;

				this.todoService['delete'](todo).then(function (todos) {
					_this2.todos.length = 0;
					Array.prototype.push.apply(_this2.todos, todos);
				});
			}
		}], [{
			key: '$inject',

			// Service Injection
			get: function get() {
				return ['TodoService'];
			}
		}]);

		return TodoListCtrl;
	})();

	_app.app.controller('TodoListCtrl', TodoListCtrl);
});
/**
 * @ngdoc function
 * @name angularAmdes6App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAmdes6App
 */
//# sourceMappingURL=todoList.js.map
