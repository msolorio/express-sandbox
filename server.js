// require the express package for our app
const express = require('express');

// instantiate our express app
const app = express();

// set up serving static assets
app.use(express.static('public'));

app.listen(process.env.PORT || 8080, () => {
  console.log(`listening on port ${process.env.PORT || 8080}`);
});