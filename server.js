const express=require("express");
//creating an instance of express module
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', require('./routes/serverRoutes'));
app.listen(process.env.PORT || 7700);
//finally the server starts