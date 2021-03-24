const { connect } = require('./helpers/db-helper/db');
const { app, start } = require('./app')

connect()
  .then(() => {
    const API_PORT = 7777;

    app.set('port', API_PORT || 7777);
    const server = app.listen(app.get('port'), () => {
      start();
      console.log(`Express running → PORT ${server.address().port}`);
    });
  }).catch((err) => {
    console.error(err);
  });
