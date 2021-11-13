const db = require('../models/db');

getAllCustomers: () => {
  // return 'User : Koray Tug';
  db.createConnection();
  const database = db.mongoClient.db('TESTAPP');
  database
    .collection('customers')
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      res.status(201).send(result);

      db.closeConnection();
    });
};

insertCustomer: () => {
  // return 'User : Koray Tug';
  db.createConnection();
  const database = db.mongoClient.db('TESTAPP');
   const collection = database.collection('customers');
    
    const result = await collection.insertOne()
};

module.exports = {
  getAllCustomers,
};
