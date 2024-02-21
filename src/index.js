const app = require('./app');

const port = process.env.PORT || 3010;
const host = 'https://express-api-ca.onrender.com';

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: ${host}`);
  /* eslint-enable no-console */
});
