var Sentry = require('@sentry/node');
Sentry.init({
    dsn: 'http://42504b9398884b01b91671d0da90d730@121.37.177.131:8080/2'
});
throw new Error('Tust it Error');
// Sentry.captureException(new Error('Good bye'));

  

