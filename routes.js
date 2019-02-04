const hello = require('./helloworld');

module.exports = (app) => {
    app.get('/', hello.hello);
}