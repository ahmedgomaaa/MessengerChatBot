const express = require('express');
const bodyParser = require('body-parser');
const requset = require('request');

const app = express();

app.set('port', (process.env.port || 8000));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hi I am a anima');
});


app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'));
});