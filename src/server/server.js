const express = require('express'),
      cats    = require('./routes/cats');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

const User = require('./models/user');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node-angular', {
  useMongoClient: true
});



app.use(express.static(path.join(__dirname, '../../dist')));

app.use(bodyParser.json());
app.use(cors());




app.get('/cats', (req, res) => {

    User.find({

    }, (err, doc) => {
      res.json(doc);
    })
  });


app.post('/cats', (req, res, next) => {
  console.log('pozted!');
  console.log(req.body);
  let user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
     email: req.body.email
  });

  user.save(); // saves it to the database. takes an optional callback argument with err, result.
  next();
});


app.delete('/cats', (req, res, next) => {
  console.log('delete is running');
  console.log(req.body);
  User.remove({
    firstName: req.body.user
  }, (err, doc) => console.log(err));
  next();
});



// app.get('/users', (req, res) => {

// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join('../../', 'dist/index.html'));
// });



app.listen(3001, () => {
  console.log('working');
});
