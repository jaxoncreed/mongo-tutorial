var mongoose = require('mongoose');
  Schema = mongoose.Schema;

var candidateSchema = new Schema({
    name: String,
    party: { type: String, enum: ["Democrat", "Libertarian", "Republican"] },
    experience: {
      congress: Boolean,
      localGovernment: Boolean,
      businessOwner: Boolean
    },
    platform: [ String ]
})

module.exports = mongoose.model('Candidate', candidateSchema);
