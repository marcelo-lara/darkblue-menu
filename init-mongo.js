db = db.getSiblingDB('darkblue-menu');
db.createUser(
  {
    user: 'api_user',
    pwd: 'api1234',
    roles: [{ role: 'readWrite', db: 'darkblue-menu' }],
  },
);
db.createCollection('users');