'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('@babel/polyfill');
var chalk = _interopDefault(require('chalk'));
var inquirer = _interopDefault(require('inquirer'));
var cowsay$1 = require('cowsay');

var index = (function () {
  return console.log("hello ".concat(chalk.magenta(process.env.USERNAME), "!"));
});

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function cowsay() {
  return _cowsay.apply(this, arguments);
}

function _cowsay() {
  _cowsay = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var s;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return inquirer.prompt('想说什么?');

          case 2:
            s = _context.sent;
            console.log(cowsay$1.say({
              text: s || 'Moooo'
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _cowsay.apply(this, arguments);
}

exports.hello = index;
exports.say = cowsay;
