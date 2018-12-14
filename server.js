const express = require('express');
const app =express();

app.use(express.static('BasicWebsite'));

app.get('/', function(request, response) {
  response.render ('public');
})

app.listen(3000, function() {
  console.log('app listening on port');
})
