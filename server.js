var express = require('express'),
  bodyParser = require('body-parser');

var app = express();

// Allows you to receive the JSON body
app.use(bodyParser.json());

// Get an array of all candidates
app.get('/candidates', function(req, res) {
  // TODO: functionality
  res.send('get all');
});

// Get candidate by id
app.get('/candidates/:id', function(req, res) {
  // TODO: functionality
  res.send('get one');
});

// Create a new candidate
app.post('/candidates', function(req, res) {
  // TODO: functionality
  res.send('create');
});

// Update a candidate
app.put('/candidates/:id', function(req, res) {
  // TODO: functionality
  res.send('update');
});

// Remove a candidate
app.delete('/candidates/:id', function(req, res) {
  // TODO: functionality
  res.send('remove');
});

// Start the server
var port = 8000;
app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
