const express = require('express'); // loading express module
const bodyParser = require('body-parser'); // to handle http post request
const api = require('./routes/api'); 
const cors = require('cors'); // Cross-Origin Resource Sharing
const path = require('path'); // working with file and directory paths
require('dotenv').config()

// to run locally

// const PORT = 3000;
// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// app.use('/api', api);

// to run in prod env

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.static(path.join(__dirname, 'public'))); //
app.use(bodyParser.json());
app.use(cors());
app.use('/api', api);
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/',(req,res)=> {
    res.send("Wekcome to page");
})
app.listen(PORT, () => {
    console.log('Server running on localhost:' + PORT);
});


