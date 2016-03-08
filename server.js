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
  Candidate.find(function(err, candidates) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(candidates);
    }
  });
});

// Get candidate by id
app.get('/candidates/:id', function(req, res) {
  Candidate.findById(req.params.id, function(err, candidate) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(candidate);
    }
  });
});

// Get candidate by id
app.get('/candidates/byparty/:party', function(req, res) {
  Candidate.find({ party: req.params.party }, function(err, candidate) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(candidate);
    }
  });
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
  Candidate.update( { _id: req.params.id }, req.body, function(err) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
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
