define(['exports', 'app'], function (exports, _app) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	// Definition

	var TodoService = (function () {
		function TodoService($q) {
			_classCallCheck(this, TodoService);

			this.todos = [];
			this.$q = $q;
		}

		_createClass(TodoService, [{
			key: 'save',
			value: function save(todo) {
				this.todos.push({
					id: this.todos.lenth,
					todo: todo
				});

				var def = this.$q.defer();
				def.resolve();
				return def.promise;
			}
		}, {
			key: 'get',
			value: function get() {
				var def = this.$q.defer();
				def.resolve(this.todos);
				return def.promise;
			}
		}, {
			key: 'delete',
			value: function _delete(todo) {
				this.todos.splice(this.todos.indexOf(todo), 1);
				var def = this.$q.defer();
				def.resolve(this.todos);
				return def.promise;
			}
		}]);

		return TodoService;
	})();

	// Injection to Angular Scope
	_app.app.service('TodoService', TodoService);
});
/**
 * @ngdoc function
 * @name angularAmddemoApp.service:TodoService
 * @description
 * # TodoService
 * 
 */
//# sourceMappingURL=todo.js.map
