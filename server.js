// include express module
const express = require('express');

// instantiate our app
const app = express();

// handle get requests to root by serving index.html
app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

app.get('/echo/:item', (request, response) => {
  const responseObj = {
    host: request.hostname,
    query: request.query,
    params: request.params
  };

  response.json(responseObj);
});

app.listen(3000, () => {
  console.log('listening for requests on port 3000');
});
