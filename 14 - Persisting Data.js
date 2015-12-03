/* Persisting Data */
/*
 - Node works great with many databases
 - Most of the databases have non-blocking drivers

 REDIS
 - Redis is an open source (BSD licensed), in-memory data structure store, used as database, cache and message broker

 To install run:
 "npm install redis --save"
 */

var redis = require('redis');
var client = redis.createClient();

// Set commands in the database by setting key-value entries
client.set("1", "one");
client.set("2", "two");
client.set("3", "three");

// To retrieve values from the database
client.get("1", function (err, reply) {
    // Commands are non-blocking
    console.log(reply);
});

/*
 Run the following cmd to start a redis client and save/retrieve data
 node '14 - Persisting Data.js'

 Expected response:
 - one on the cmd
 */