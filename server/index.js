const express = require('express');// eslint-disable-line
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => { /* eslint-disable */
  console.log(`Example app listening at http://localhost:${port}`); /* eslint-disable */
})