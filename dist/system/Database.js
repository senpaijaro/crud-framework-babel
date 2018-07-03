'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _mssql = require('mssql');

var _mssql2 = _interopRequireDefault(_mssql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Database = function () {
	function Database() {
		(0, _classCallCheck3.default)(this, Database);
	}

	(0, _createClass3.default)(Database, [{
		key: 'connectdb',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var db = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!(db != null)) {
									_context.next = 12;
									break;
								}

								_context.t0 = db;
								_context.next = _context.t0 === 'srsn' ? 4 : _context.t0 === 'srsnms' ? 8 : 12;
								break;

							case 4:
								_context.next = 6;
								return this.mysqlExecute("localhost", "root", "password!@#$", "test");

							case 6:
								return _context.abrupt('return', _context.sent);

							case 8:
								_context.next = 10;
								return this.mssqlExecute("192.168.0.148", "markuser", "tseug", "NOVA_JADE");

							case 10:
								return _context.abrupt('return', _context.sent);

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function connectdb() {
				return _ref.apply(this, arguments);
			}

			return connectdb;
		}()
	}, {
		key: 'mysqlExecute',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(host, user, password, database) {
				var conn;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return this.connjson(host, user, password, database);

							case 2:
								conn = _context2.sent;
								_context2.next = 5;
								return this.connection(conn);

							case 5:
								return _context2.abrupt('return', _context2.sent);

							case 6:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function mysqlExecute(_x2, _x3, _x4, _x5) {
				return _ref2.apply(this, arguments);
			}

			return mysqlExecute;
		}()
	}, {
		key: 'mssqlExecute',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(host, user, password, database) {
				var conn;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_context3.next = 2;
								return this.msConnJson(host, user, password, database);

							case 2:
								conn = _context3.sent;
								_context3.next = 5;
								return this.msconnection(conn);

							case 5:
								return _context3.abrupt('return', _context3.sent);

							case 6:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function mssqlExecute(_x6, _x7, _x8, _x9) {
				return _ref3.apply(this, arguments);
			}

			return mssqlExecute;
		}()
	}, {
		key: 'connection',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(conn) {
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								return _context4.abrupt('return', _bluebird2.default.promisifyAll(_mysql2.default.createConnection(conn)));

							case 1:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function connection(_x10) {
				return _ref4.apply(this, arguments);
			}

			return connection;
		}()
	}, {
		key: 'msconnection',
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(conn) {
				var mssql, pool, result;
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								mssql = _bluebird2.default.promisifyAll(_mssql2.default);
								_context5.next = 3;
								return new mssql.ConnectionPool(conn).connect();

							case 3:
								pool = _context5.sent;
								_context5.next = 6;
								return pool.request();

							case 6:
								result = _context5.sent;
								return _context5.abrupt('return', result);

							case 8:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function msconnection(_x11) {
				return _ref5.apply(this, arguments);
			}

			return msconnection;
		}()
	}, {
		key: 'msConnJson',
		value: function () {
			var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(host, user, password, database) {
				var connms;
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								connms = {
									user: user,
									password: password,
									server: host,
									database: database,
									options: {
										abortTransactionOnError: true // <-- SET XACT_ABORT ON
									}
								};
								return _context6.abrupt('return', connms);

							case 2:
							case 'end':
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function msConnJson(_x12, _x13, _x14, _x15) {
				return _ref6.apply(this, arguments);
			}

			return msConnJson;
		}()
	}, {
		key: 'connjson',
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(host, user, password, database) {
				return _regenerator2.default.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								return _context7.abrupt('return', {
									host: host,
									user: user,
									password: password,
									database: database,
									connectionLimit: 1000,
									queueLimit: -1, acquireTimeout: 2
								});

							case 1:
							case 'end':
								return _context7.stop();
						}
					}
				}, _callee7, this);
			}));

			function connjson(_x16, _x17, _x18, _x19) {
				return _ref7.apply(this, arguments);
			}

			return connjson;
		}()
	}]);
	return Database;
}();

module.exports = Database;
//# sourceMappingURL=Database.js.map