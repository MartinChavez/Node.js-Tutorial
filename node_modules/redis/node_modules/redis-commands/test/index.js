'use strict';

var commands = require('..');
var expect = require('chai').expect;

describe('redis-commands', function () {
  describe('.list', function () {
    it('should be an array', function () {
      expect(commands.list).to.be.instanceof(Array);
    });

    it('should ensure every command is lowercase', function () {
      commands.list.forEach(function (command) {
        expect(command.toLowerCase()).to.eql(command);
      });
    });

    it('should ensure quit command is added to the commands list', function () {
      expect(commands.list.indexOf('quit')).not.to.eql(-1);
    });

    it('should not contain multi-word commands', function () {
      commands.list.forEach(function (command) {
        expect(command.indexOf(' ')).to.eql(-1);
      });
    });
  });

  describe('.hasFlag', function () {
    it('should return true if the command has the flag', function () {
      expect(commands.hasFlag('set', 'write')).to.eql(true);
      expect(commands.hasFlag('set', 'denyoom')).to.eql(true);
      expect(commands.hasFlag('select', 'fast')).to.eql(true);
    });

    it('should return false otherwise', function () {
      expect(commands.hasFlag('set', 'fast')).to.eql(false);
      expect(commands.hasFlag('set', 'readonly')).to.eql(false);
      expect(commands.hasFlag('select', 'denyoom')).to.eql(false);
    });
  });

  describe('.getKeyIndexes', function () {
    var index = commands.getKeyIndexes;

    it('should return key indexes', function () {
      expect(index('set', ['foo', 'bar'])).to.eql([0]);
      expect(index('get', ['foo'])).to.eql([0]);
      expect(index('mget', ['foo', 'bar'])).to.eql([0, 1]);
      expect(index('mset', ['foo', 'v1', 'bar', 'v2'])).to.eql([0, 2]);
      expect(index('hmset', ['key', 'foo', 'v1', 'bar', 'v2'])).to.eql([0]);
      expect(index('blpop', ['key1', 'key2', '17'])).to.eql([0, 1]);
      expect(index('evalsha', ['23123', '2', 'foo', 'bar', 'zoo'])).to.eql([2, 3]);
      expect(index('sort', ['key'])).to.eql([0]);
      expect(index('zunionstore', ['out', '2', 'zset1', 'zset2', 'WEIGHTS', '2', '3'])).to.eql([0, 2, 3]);
    });

    it('should support numeric argument', function () {
      expect(index('evalsha', ['23123', 2, 'foo', 'bar', 'zoo'])).to.eql([2, 3]);
      expect(index('zinterstore', ['out', 2, 'zset1', 'zset2', 'WEIGHTS', 2, 3])).to.eql([0, 2, 3]);
    });

    context('disable parseExternalKey', function () {
      it('should not parse external keys', function () {
        expect(index('sort', ['key', 'BY', 'hash:*->field'])).to.eql([0, 2]);
        expect(index('sort', ['key', 'BY', 'hash:*->field', 'LIMIT', 2, 3, 'GET', 'gk', 'GET', '#', 'Get', 'gh->f*', 'DESC', 'ALPHA', 'STORE', 'store'])).to.eql([0, 2, 7, 11, 15]);
      });
    });

    context('enable parseExternalKey', function () {
      it('should parse external keys', function () {
        expect(index('sort', ['key', 'BY', 'hash:*->field'], {
          parseExternalKey: true
        })).to.eql([0, [2, 6]]);
        expect(index('sort', ['key', 'BY', 'hash:*->field', 'LIMIT', 2, 3, 'GET', 'gk', 'GET', '#', 'Get', 'gh->f*', 'DESC', 'ALPHA', 'STORE', 'store'], {
          parseExternalKey: true
        })).to.eql([0, [2, 6], [7, 2], [11, 2], 15]);
      });
    });
  });
});
