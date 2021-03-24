const {connect} = require('./helpers/db-helper/db');
const app = require('./app');
const API_PORT = 7777;

app.set('port', API_PORT || 7777);

const server = app.listen(app.get('port'), async () => {
  await connect();
  console.log(`Express running → PORT ${server.address().port}`);
});
