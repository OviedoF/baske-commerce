const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');

/* initialize */
require('dotenv').config();
require('./mongoDB');
const port = process.env.PORT || 4000;
const app = express();
/* */

/* setting */
app.use(express.static(path.join(__dirname, 'assets')));
app.use(cors({
    origin: '*'
}));
/*  */


app.listen(port, (req, res) => {
    console.log('server on port', port)
})