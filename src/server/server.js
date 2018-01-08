const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../../dist')));
// app.use(express.static('public'));



app.use(bodyParser.json());


app.get('/home', (req, res) => {
  res.status(200).json('it worked!');
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join('../../', 'dist/index.html'));
// });



app.listen(3001, () => {
  console.log('working');
});
