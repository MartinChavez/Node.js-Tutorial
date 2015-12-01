'use strict';

var commands = require('./commands');

/**
 * Redis command list
 *
 * All commands are lowercased.
 *
 * @var {string[]}
 * @public
 */
var commandsList = Object.keys(commands);
commandsList.push('quit');
exports.list = commandsList;

/**
 * Check if the command has the flag
 *
 * Some of possible flags: readonly, noscript, loading
 * @param {string} commandName - the command name
 * @param {string} flag - the flag to check
 * @return {boolean} result
 * @public
 */
exports.hasFlag = function (commandName, flag) {
  var command = commands[commandName];
  if (!command) {
    throw new Error('Unknown command ' + commandName);
  }

  var flags = command.flags;

  for (var i = 0; i < flags.length; i++) {
    if (flags[i] === flag) {
      return true;
    }
  }

  return false;
};

/**
 * Get indexes of keys in the command arguments
 *
 * @param {string} commandName - the command name
 * @param {string[]} args - the arguments of the command
 * @param {object} [options] - options
 * @param {boolean} [options.parseExternalKey] - parse external keys
 * @return {number[]} - the list of the index
 * @public
 *
 * @example
 * ```javascript
 * getKeyIndexes('set', ['key', 'value']) // [0]
 * getKeyIndexes('mget', ['key1', 'key2']) // [0, 1]
 * ```
 */
exports.getKeyIndexes = function (commandName, args, options) {
  var command = commands[commandName];
  if (!command) {
    throw new Error('Unknown command ' + commandName);
  }

  if (!Array.isArray(args)) {
    throw new Error('Expect args to be an array');
  }

  var parseExternalKey = options && options.parseExternalKey;

  var keys = [];
  var i, range, keyStart, keyStop;
  switch (commandName) {
  case 'eval':
  case 'evalsha':
    keyStop = Number(args[1]) + 2;
    for (i = 2; i < keyStop; i++) {
      keys.push(i);
    }
    break;
  case 'sort':
    keys.push(0);
    for (i = 1; i < args.length - 1; i++) {
      if (typeof args[i] !== 'string') {
        continue;
      }
      var directive = args[i].toUpperCase();
      if (directive === 'GET') {
        i += 1;
        if (args[i] !== '#') {
          if (parseExternalKey) {
            keys.push([i, getExternalKeyNameLength(args[i])]);
          } else {
            keys.push(i);
          }
        }
      } else if (directive === 'BY') {
        i += 1;
        if (parseExternalKey) {
          keys.push([i, getExternalKeyNameLength(args[i])]);
        } else {
          keys.push(i);
        }
      } else if (directive === 'STORE') {
        i += 1;
        keys.push(i);
      }
    }
    break;
  case 'zunionstore':
  case 'zinterstore':
    keys.push(0);
    keyStop = Number(args[1]) + 2;
    for (i = 2; i < keyStop; i++) {
      keys.push(i);
    }
    break;
  default:
    keyStart = command.keyStart - 1;
    keyStop = command.keyStop > 0 ? command.keyStop : args.length + command.keyStop + 1;
    if (keyStart >= 0 && keyStop <= args.length && keyStop > keyStart && command.step > 0) {
      for (i = keyStart; i < keyStop; i += command.step) {
        keys.push(i);
      }
    }
    break;
  }

  return keys;
};

function getExternalKeyNameLength(key) {
  if (typeof key !== 'string') {
    key = String(key);
  }
  var hashPos = key.indexOf('->');
  return hashPos === -1 ? key.length : hashPos;
}
