
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist'));

// send the user to index html page inspite of the url
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))