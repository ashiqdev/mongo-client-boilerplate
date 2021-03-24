const app = require('./app');
const API_PORT = 7777;

app.set('port', API_PORT || 7777);

const server = app.listen(app.get('port'), async () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
