define(['exports', 'app', 'todoService'], function (exports, _app, _todoService) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var TodoCreateCtrl = (function () {
		function TodoCreateCtrl(todoService) {
			_classCallCheck(this, TodoCreateCtrl);

			this.todo = '';
			this.todoService = todoService;
		}

		_createClass(TodoCreateCtrl, [{
			key: 'save',
			value: function save() {
				var _this = this;

				this.todoService.save(this.todo).then(function () {
					_this.todo = '';
				});
			}
		}], [{
			key: '$inject',
			get: function get() {
				return ['TodoService'];
			}
		}]);

		return TodoCreateCtrl;
	})();

	_app.app.controller('TodoCreateCtrl', TodoCreateCtrl);
});
/**
 * @ngdoc function
 * @name angularAmdes6App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularAmdes6App
 */
//# sourceMappingURL=todoCreate.js.map
