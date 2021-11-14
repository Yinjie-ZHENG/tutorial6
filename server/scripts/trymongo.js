require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = process.env.DB_URL || 'mongodb://localhost/issuetracker';

function testWithCallbacks(callback) {
  console.log('\n-------------------- testWithCallbacks -------------------------');
  /*Init */
  const client = new MongoClient(url, { useNewUrlParser: true });
  client.connect((connErr) => {
    if (connErr) {
      callback(connErr);
      return;
    }
    console.log('Connected to MongoDB URL', url);

    const db = client.db();
    const collection = db.collection('issues');
    /*Add a new customer's information*/
    const issue = { id: 1, name: 'Yinjie', phone: '89422712',timestamp:new Date()};
    collection.insertOne(issue)

/*Add 2 new customers' information*/
collection.insertMany([
  { id: 2, name: 'Xaogoo', phone: '43962200',timestamp:new Date()},
  { id: 3, name: 'Gearless', phone: '23333333',timestamp:new Date() },
])
/* find the customer with id=3*/
collection.find({ id: 2 })
        .toArray((findErr, docs) => {
          if (findErr) {
            client.close();
            callback(findErr);
            return;
          }
          console.log('Result of find:\n', docs);
          return;
          /*client.close();
          callback();*/
        });
/* delete the customer with id=3*/
collection.deleteOne({ id: 2 })
/* now try to find the customer with id=4 again*/
collection.find({ id:  2})
        .toArray((findErr, docs) => {
          if (findErr) {
            client.close();
            callback(findErr);
            return;
          }
          console.log('Result of find:\n', docs);
          return;
          client.close();
          callback();
        });
  });
}
/*
async function testWithAsync() {
  console.log('\n--------------------------- testWithAsync ------------------------------');
  const client = new MongoClient(url, { useNewUrlParser: true });
  try {
    await client.connect();
    console.log('Connected to MongoDB URL', url);
    const db = client.db();
    const collection = db.collection('employees');

    const employee = { id: 2, name: 'B. Async', age: 16 };
    const result = await collection.insertOne(employee);
    console.log('Result of insert:\n', result.insertedId);

    const docs = await collection.find({ _id: result.insertedId })
      .toArray();
    console.log('Result of find:\n', docs);
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}
*/
testWithCallbacks((err) => {
  if (err) {
    console.log(err);
  }
  /*testWithAsync();*/
});
