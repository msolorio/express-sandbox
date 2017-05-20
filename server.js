const express = require('express');

const app = express();

const sentence = 'this is the sentence';

app.get('/', (request, response) => {
  response.send(sentence);
});

app.listen(3000, () => {
  console.log('listening for requests on port 3000');
});
