const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');
const fakeData = require('../dummydatagenerator.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/products/:id', (req, res) => {
  db.getReviewsData(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      // console.log(getFormattedDate(results));
      res.status(200).send(results);
    }
  });
});

app.put('/api/reviews/:id', (req, res) => {
  const data = [req.body, req.params.id];
  db.updateData(data, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

// app.post('/dummy', (req, res) => {
//   const allData = [
//     fakeData.generateUsers(),
//     fakeData.generateProducts(),
//     fakeData.generateReviews()
//   ];
//   db.insertData(allData, (err, results) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.end();
//     }
//   });
// });
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
