const dotenv = require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const mongoClient = new MongoClient(process.env.ATLAS_URI, {
  useUnifiedTopology: true,
});

// // mongoClient.connect().then(
// //   (result) => {
// //     const database = mongoClient.db('TESTAPP');
// //     database.collectionName = 'customers';
// //     console.log('Connected to the DB!');
// //   },
// //   (error) => {
// //     console.log(error);
// //   }
// // );

const createConnection = async () => {
  await mongoClient.connect();

  console.log('Connected to the DB!');
};

const closeConnection = async () => {
  mongoClient.close();
  console.log('Connection closed to the DB!');
};

module.exports.mongoClient = mongoClient;
module.exports.createConnection = createConnection;
module.exports.closeConnection = closeConnection;
