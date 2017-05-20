const express = require('express');

const app = express();

app.get('/user/:user_id', (request, response) => {  
  response.sendFile(`${__dirname}/views/index.html`);

  const userId = request.params.user_id;
  response.cookie('user_id', userId);
});

app.listen(3000, () => {
  console.log('listening for requests on port 3000');
});
