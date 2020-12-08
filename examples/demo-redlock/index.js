const Redis = require('ioredis');
const Redlock = require('redlock');

let redisClient = new Redis({
    port: 6379, // Redis port
    host: "127.0.0.1", // Redis host
    family: 4, // 4 (IPv4) or 6 (IPv6)
    password: "dpblueai",
    db: 3,
});

var redlock = new Redlock(
    // you should have one client for each independent redis node
    // or cluster
    [redisClient],
    {
        // the expected clock drift; for more details
        // see http://redis.io/topics/distlock
        driftFactor: 0.01, // multiplied by lock ttl to determine drift time

        // the max number of times Redlock will attempt
        // to lock a resource before erroring
        retryCount: 10,

        // the time in ms between attempts
        retryDelay: 200, // time in ms

        // the max time in ms randomly added to retries
        // to improve performance under high contention
        // see https://www.awsarchitectureblog.com/2015/03/backoff.html
        retryJitter: 200 // time in ms
    }
);

// the string identifier for the resource you want to lock
var resource = 'locks:account:322456';

// the maximum amount of time you want the resource locked in milliseconds,
// keeping in mind that you can extend the lock up until
// the point when it expires
var ttl = 1000;

redlock.lock(resource, ttl).then(function (lock) {

    // ...do something here...
    console.log('unlocking');
    // unlock your resource when you are done
    return lock.unlock()
        .catch(function (err) {
            // we weren't able to reach redis; your lock will eventually
            // expire, but you probably want to log this error
            console.error(err);
        });
});
console.log('unlocked');
