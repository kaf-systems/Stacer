'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Vuex = require('Vuex');

var _Vuex2 = _interopRequireDefault(_Vuex);

var _app = require('./modules/app');

var _app2 = _interopRequireDefault(_app);

var _dashboard = require('./modules/dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _services = require('./modules/services');

var _services2 = _interopRequireDefault(_services);

var _startupApps = require('./modules/startup-apps');

var _startupApps2 = _interopRequireDefault(_startupApps);

var _systemCleaner = require('./modules/system-cleaner');

var _systemCleaner2 = _interopRequireDefault(_systemCleaner);

var _uninstaller = require('./modules/uninstaller');

var _uninstaller2 = _interopRequireDefault(_uninstaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Vuex2.default.store({
	modules: {
		app: _app2.default,
		dashboard: _dashboard2.default,
		services: _services2.default,
		startupApps: _startupApps2.default,
		systemCleaner: _systemCleaner2.default,
		uninstaller: _uninstaller2.default
	}
});