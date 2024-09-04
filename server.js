require('dotenv').config();
const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT;

// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);


db()
.then(()=>{
    app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
})
.catch((err)=>{
console.log("Mongo dB Connection Failed !!" , err);
})

