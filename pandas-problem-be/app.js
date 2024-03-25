const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3001;
const connection = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

router.post('/login', (req, res) => {
const loginQuery = `SELECT * FROM tbl_users WHERE email = ?`;
const loginParams = [req.body.email];

  connection.query(loginQuery,loginParams, (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error querying database');
      return;
    } else {
      if (results.length === 0) {
        res.status(401).send('Invalid username');
        return;
      } else {
        res.status(200).send('Valid username');
        return
      }
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
