const express = require('express');

const app = express();

function generateMadLib(wordInputs) {
  return `There's a ${wordInputs.adjective1} new ${wordInputs.name} in ${wordInputs.place} and everyone's talking.
Stunningly ${wordInputs.adjective2} and ${wordInputs.adverb} ${wordInputs.adjective3}, all the cool kids know it.
However, ${wordInputs.name} has a secret - ${wordInputs.name}'s a vile vampire.

Will it end with a bite, or with a stake through the ${wordInputs.noun}?`
}

app.get('/', (request, response) => {
  const sentence = generateMadLib(request.query);
  response.send(sentence);
});

app.listen(3000, () => {
  console.log('listening for requests on port 3000');
});
