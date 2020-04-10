const express = require('express')
const app = express();
var path = require('path');
var https = require('https')
var fs = require('fs')
const port = 3000

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.use('/static', express.static(path.join(__dirname, '/static')));

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})