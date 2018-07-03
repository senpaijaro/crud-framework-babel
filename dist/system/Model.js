'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _Database2 = require('./Database');

var _Database3 = _interopRequireDefault(_Database2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Model = function (_Database) {
	(0, _inherits3.default)(Model, _Database);

	function Model() {
		(0, _classCallCheck3.default)(this, Model);
		return (0, _possibleConstructorReturn3.default)(this, (Model.__proto__ || (0, _getPrototypeOf2.default)(Model)).call(this));
	}

	/**
 	@param connection string 
 	@param table string 
 	@param fields string 
 	@param where json 
 */


	(0, _createClass3.default)(Model, [{
		key: 'select',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(connection, table) {
				var fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '*';
				var where = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
				var field, value, sql;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								field = [], value = [], sql = 'SELECT ' + fields + ' FROM ' + table + ' ';

								if (!(where != "")) {
									_context.next = 5;
									break;
								}

								_context.next = 4;
								return _lodash2.default.each(where, function (values, fields) {
									field.push(fields + ' = ?');
									value.push(values);
								});

							case 4:
								sql += 'WHERE ' + field.join(' AND ');

							case 5:
								_context.next = 7;
								return this.execute(connection, sql, value);

							case 7:
								return _context.abrupt('return', _context.sent);

							case 8:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function select(_x, _x2) {
				return _ref.apply(this, arguments);
			}

			return select;
		}()
		/**
  	@param connection string 
  	@param table string 
  	@param data json 
  	@param ignore boolean 
  */

	}, {
		key: 'insert',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(connection, table, data) {
				var ignore = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
				var field, setVal, values, sql;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								field = [], setVal = [], values = [];
								_context2.next = 3;
								return _lodash2.default.each(data, function (val, fld) {
									field.push(fld);
									setVal.push('?');
									values.push(val);
								});

							case 3:
								sql = 'INSERT ' + (ignore == false ? "" : "IGNORE") + ' INTO ' + table + ' (' + field.join(',') + ') VALUES (' + setVal + ')';
								_context2.next = 6;
								return this.execute(connection, sql, values);

							case 6:
								return _context2.abrupt('return', _context2.sent);

							case 7:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function insert(_x5, _x6, _x7) {
				return _ref2.apply(this, arguments);
			}

			return insert;
		}()
		/**
  	@param connection string 
  	@param table string 
  	@param condition json 
  	@param data json 
  */

	}, {
		key: 'update',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(connection, table, condition, data) {
				var field, setVal, values, where, sql;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								field = [], setVal = [], values = [], where = [];
								_context3.next = 3;
								return _lodash2.default.each(data, function (val, fld) {
									field.push(fld + " = ?");
									values.push(val);
								});

							case 3:
								_context3.next = 5;
								return _lodash2.default.each(condition, function (val, fld) {
									where.push(fld + ' = ?');
									values.push(val);
								});

							case 5:
								sql = 'UPDATE ' + table + ' SET ' + field.join(',') + ' WHERE ' + where.join(' AND ');
								_context3.next = 8;
								return this.execute(connection, sql, values);

							case 8:
								return _context3.abrupt('return', _context3.sent);

							case 9:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function update(_x9, _x10, _x11, _x12) {
				return _ref3.apply(this, arguments);
			}

			return update;
		}()
	}, {
		key: 'query',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(connection, sql) {
				var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.next = 2;
								return this.execute(connection, sql, values);

							case 2:
								return _context4.abrupt('return', _context4.sent);

							case 3:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function query(_x13, _x14) {
				return _ref4.apply(this, arguments);
			}

			return query;
		}()
	}, {
		key: 'execute',
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(connection, sql) {
				var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var conn;
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								_context5.prev = 0;
								_context5.next = 3;
								return this.connectdb(connection);

							case 3:
								conn = _context5.sent;

								if (!(value == null)) {
									_context5.next = 10;
									break;
								}

								_context5.next = 7;
								return conn.queryAsync(sql);

							case 7:
								return _context5.abrupt('return', _context5.sent);

							case 10:
								_context5.next = 12;
								return conn.queryAsync(sql, value);

							case 12:
								return _context5.abrupt('return', _context5.sent);

							case 13:
								_context5.next = 19;
								break;

							case 15:
								_context5.prev = 15;
								_context5.t0 = _context5['catch'](0);

								console.log(_context5.t0);
								return _context5.abrupt('return', false);

							case 19:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this, [[0, 15]]);
			}));

			function execute(_x16, _x17) {
				return _ref5.apply(this, arguments);
			}

			return execute;
		}()
	}]);
	return Model;
}(_Database3.default);

module.exports = Model;
//# sourceMappingURL=Model.js.map