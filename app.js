const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const morgan = require('morgan');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));
app.use('/', express.static(path.join(__dirname, 'front-end/build')));

app.get('/**', (req,res)=> {
    res.sendFile(__dirname + '/front-end/build/index.html');
});

app.use(function (err, req, res, next) {
    res.json({"error" : err.name + ": " + err.message});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`port listening on port ${port}`);
});