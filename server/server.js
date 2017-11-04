const express = require('express');
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());




app.listen(5000, function() {
  console.log('Listening on 5000');
});