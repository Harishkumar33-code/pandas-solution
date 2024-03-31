// Import the mysql module
const mysql = require('mysql');

// Create a pool connection to the database
const pool = mysql.createPool({
  connectionLimit: 10, // Adjust this value according to your needs
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'pandas'
});

// Function to execute queries with async/await
const executeQuery = (query, params = []) => {
  return new Promise((resolve, reject) => {
    pool.query(query, params, (error, results, fields) => {
      if (error) {
        reject({'isError': true, data:[], 'error': error});
      } else{
        resolve({'isError': false, data: results, 'error': null});
      }
    });
  });
};

// Export the executeQuery function for use in other modules
module.exports = executeQuery;
