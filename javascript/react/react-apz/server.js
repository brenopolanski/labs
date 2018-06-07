const express = require('express');
const bodyParser = require('body-parser');
// https://docs.mongodb.com/manual/reference/method/ObjectId/
const { MongoClient, ObjectID } = require('mongodb');
const atob = require('atob');

try {
  const env = require('dotenv');

  env.config({ silent: true });
}
catch(e) {
  // Do nothing - if dotenv is not installed then we don't really need it
}

const app = express();
app.use(bodyParser.json());

// We will declare the database connection variable outside of the callback
// so that the server gets global access to it
var db;
const COLLECTION = 'contacts';

MongoClient.connect(process.env.MONGODB_URI, (error, database) => {
  if (error) {
    console.log('There was an error while trying to connect to the database.', error);
    process.exit(1);
  }

  console.log('Successfully connected to MongoDB.');

  db = database;

  const server = app.listen(process.env.PORT || 8080, () => {
    const { port } = server.address();
    console.log('App now running on port %d in %s mode', port, app.settings.env);
  });
});

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});


// GET /contacts - list all contacts
// GET /contacts/:id - fetch contact by id
// POST /contacts - insert new contact
// PUT /contacts/:id - update contact
// DELETE /contacts/:id - delete contact

// app.get('/contacts', (req, res) => {
//   db.collection(COLLECTION).find({}).toArray((error, docs) => {
//     if (error) {
//       // If this fails, return an Error 500 - Internal Server Error
//       handleError(res, error.message, 'Failed to fetch contacts');
//     }
//     else {
//       let contacts = [];

//       docs.forEach(doc => {
//         contacts.push({
//           id: doc._id,
//           name: doc.name,
//           phone: doc.phone,
//           email: doc.email
//         });
//       });

//       res.status(200).json(contacts);
//     }
//   });
// });

app.get('/contacts', (req, res) => {
  const { query } = req;
  let filters = {};

  if (Object.keys(query).length > 0) {
    filters = {
      phone: atob(query.phone)
    };

    if (query.id !== 'undefined' && query.id.length > 0) {
      Object.assign(filters, {
        _id: {
          '$ne': new ObjectID(query.id)
        }
      });
    }
  }

  db.collection(COLLECTION).find(filters).toArray((error, docs) => {
    if (error) {
      // If this fails, return an Error 500 - Internal Server Error
      handleError(res, error.message, 'Failed to fetch contacts');
    }
    else {
      let contacts = [];

      docs.forEach(doc => {
        contacts.push({
          id: doc._id,
          name: doc.name,
          phone: doc.phone,
          email: doc.email
        });
      });

      res.status(200).json(contacts);
    }
  });
});

app.get('/contacts/:id', (req, res) => {
  db.collection(COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, (error, doc) => {
    if (error) {
      handleError(res, error.message, 'Failed to fetch contact', 404);
    }
    else {
      res.status(200).json({
        id: doc._id,
        name: doc.name,
        phone: doc.phone,
        email: doc.email
      });
    }
  });
});

app.post('/contacts', (req, res) => {
  const { body } = req;

  if (!(body.name || body.email)) {
    handleError(res, 'Invalid user input', 'Must provide name and e-mail at least.', 400);
    return;
  }

  db.collection(COLLECTION).insertOne(body, (error, doc) => {
    if (error) {
      handleError(res, error.message, 'Failed to create contact');
    }
    else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

app.put('/contacts/:id', (req, res) => {
  let { body } = req;

  delete body.id;

  db.collection(COLLECTION).updateOne({ _id: new ObjectID(req.params.id) }, body, (error, doc) => {
    if (error) {
      handleError(res, error.message, 'Failed to update contact');
    }
    else {
      res.status(204).end();
    }
  });
});

app.delete('/contacts/:id', (req, res) => {
  db.collection(COLLECTION).deleteOne({ _id: new ObjectID(req.params.id) }, (error, doc) => {
    if (error) {
      handleError(res, error.message, 'Failed to delete contact');
    }
    else {
      res.status(204).end();
    }
  });
});

const handleError = (res, reason, message, code) => {
  console.log('Error: %s', reason);
  res.status(code || 500).json({ error: message });
};
