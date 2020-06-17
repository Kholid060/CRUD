const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const api = require('./routes/api');
const connection = require('./connection');
const app = express();


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.use(cors({origin:true,credentials: true}));

app.use('/api/v1', api)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`App listen on ${PORT} \n ${new Date()}`)
})