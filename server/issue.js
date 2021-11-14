const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

async function list() {
  const db = getDb();
  const issues = await db.collection('issues').find({}).toArray();
  return issues;
}



function validate(issue) {
  const errors = [];
  if (issue.phone.length < 3) {
    errors.push('Field "phone" must be at least 3 characters long.');
  }
  if (!issue.name) {
    errors.push('Field "name" is required');
  }
  if (errors.length > 0) {
    throw new UserInputError('Invalid input(s)', { errors });
  }
}
function report_del_err() {
  const errors = [];
  errors.push('Field to delete! Ensure your input is valid!');
  
  if (errors.length > 0) {
    throw new UserInputError('Invalid input(s)', { errors });
  }
}

async function add(_, { issue }) {
  const db = getDb();
  validate(issue);

  const newIssue = Object.assign({}, issue);
  newIssue.timestamp = new Date();
  newIssue.id = await getNextSequence('issues');

  const result = await db.collection('issues').insertOne(newIssue);
  const savedIssue = await db.collection('issues')
    .findOne({ _id: result.insertedId });
  return savedIssue;
}

async function del(_, { id }) {
  const db = getDb();
  
  const issue = await db.collection('issues').findOne({id});
  if (!issue) {/*report_del_err();*/return false;} 
  result = await db.collection('issues').deleteOne({id});
  return true

}



module.exports = { list, add,del };
