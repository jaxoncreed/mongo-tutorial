var express = require('express'),
  bodyParser = require('body-parser');
  mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/candidates');
var Candidate = require('./candidateModel');

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
  console.log(req.body);
  var newCandidate = new Candidate(req.body);
  newCandidate.save(function(err) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
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
