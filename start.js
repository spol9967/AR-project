const express = require('express')
const app = express();
var path = require('path');
const port = 3000

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.use('/static', express.static(path.join(__dirname, '/static')))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))