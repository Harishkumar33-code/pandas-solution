const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3001;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

// Import routes
const userRoutes = require('./routes/userRoutes');

// Routes
router.use('/user', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}/`);
});
