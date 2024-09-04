
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// Define the Person schema
const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    party: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    votes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            votedAt: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    voteCount: {
        type: Number,
        default: 0
    }
});


// "votes": [
// {
// "user": "611f7132øe8f3eø01f4e4ef6",
// "votedAt": "2Ø24-Ø2-2ØTØ8: øø: øØ. øøøZ"
//},
// {
// "user": "611f7144øe8f3eøø1f4e4ef8",
// "votedAt": "2øø.øeøz"
// }
// ]


const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;
