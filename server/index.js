const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const path = require('path');
const db = require('../database/index.js');
const fakeData = require('../dummydatagenerator.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/colosseum', (req, res) => {
  db.getColosseumData((err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  })
})

app.post('/colosseum', (req, res) => {
  // console.log(fakeData.generateUsers())
  // console.log(req.body)
  for (let i = 0; i < 10; i++) {
    var fakeUser = fakeData.generateUsers()
    db.insertColosseumData(fakeUser, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  }
})

app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`);
})