
module.exports = {
  "development": {
    "username": postgres,
    "password": null,
    "database": "dev_hiring_challenge",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DATABASE_USR,
    "password": process.env.DATABASE_PWD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_URL,
    "dialect": "postgres"
  }
}
