/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * localhost:
 *   mongo issuetracker scripts/init.mongo.js
 * Atlas:
 *   mongo mongodb+srv://user:pwd@xxx.mongodb.net/issuetracker scripts/init.mongo.js
 * MLab:
 *   mongo mongodb://user:pwd@xxx.mlab.com:33533/issuetracker scripts/init.mongo.js
 */

/* global db print */
/* eslint no-restricted-globals: "off" */

db.issues.remove({});

const issuesDB = [
  {id: 1,name: 'Newa',phone: '77777777',timestamp: new Date(),},
  {id: 2,name: '2Newa',phone: '66667777',timestamp: new Date(),},
  {id: 3,name: 'awafw',phone: '99961123',timestamp: new Date(),},
  {id: 4,name: 'Aaron',phone: '66997777',timestamp: new Date(),},
  {id: 5,name: 'Aayyron',phone: '99667777',timestamp: new Date(),},
  {id: 6,name: 'asdsAaron',phone: '69583333',timestamp: new Date(),},
  {id: 7,name: 'TTTT',phone: '9876543',timestamp: new Date(),},
  {id: 8,name: 'QQQQ',phone: '25896365',timestamp: new Date(),},
  {id: 9,name: 'WWWW',phone: '74859632',timestamp: new Date(),},
  {id: 10,name: 'HHHH',phone: '88888888',timestamp: new Date(),},
  {id: 11,name: 'SDAA',phone: '12366663',timestamp: new Date(),},
  {id: 12,name: 'SSSS',phone: '66665555',timestamp: new Date(),},
  {id: 13,name: 'DDDD',phone: '99865596',timestamp: new Date(),},
  {id: 14,name: 'FFFF',phone: '99999999',timestamp: new Date(),},
  {id: 15,name: 'GGGG',phone: '44445555',timestamp: new Date(),},
  {id: 16,name: 'HHHH',phone: '12333321',timestamp: new Date(),},
  {id: 17,name: 'KKKK',phone: '44445556',timestamp: new Date(),},
  {id: 18,name: 'ZZZZ',phone: '11112222',timestamp: new Date(),},
  {id: 19,name: 'XXXX',phone: '33335552',timestamp: new Date(),},
  {id: 20,name: 'UUUU',phone: '77775558',timestamp: new Date(),},
];

db.issues.insertMany(issuesDB);
const count = db.issues.count();
print('Inserted', count, 'issues');

db.counters.remove({ _id: 'issues' });
db.counters.insert({ _id: 'issues', current: count });

db.issues.createIndex({ id: 1 }, { unique: true });
db.issues.createIndex({ phone: 1 });
db.issues.createIndex({ name: 1 });
db.issues.createIndex({ timestamp: 1 });
