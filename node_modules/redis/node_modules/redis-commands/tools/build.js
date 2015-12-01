var fs = require('fs');
var path = require('path');
var stringify = require('json-stable-stringify');
var commandPath = path.join(__dirname, '..', 'commands.json');

var Redis = require('ioredis');
var redis = new Redis(process.env.REDIS_URI);

redis.command(function (err, res) {
  redis.disconnect();

  if (err) {
    throw err;
  }

  var commands = res.reduce(function (prev, current) {
    prev[current[0]] = {
      arity: current[1],
      flags: current[2],
      keyStart: current[3],
      keyStop: current[4],
      step: current[5]
    };
    return prev;
  }, {});

  // Use json-stable-stringify instead fo JSON.stringify
  // for easier diffing
  var content = stringify(commands, { space: '  ' });

  fs.writeFile(commandPath, content);
});
