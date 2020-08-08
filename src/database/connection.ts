import knex from 'knex'
import path from 'path'

// Migrations - control the version of the database

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true,
});

export default db