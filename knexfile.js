const env = require('./.env')


module.exports = {
  client: 'postgresql',
    connection: {
      database: env.ENV_DATABASE,
      user:     env.ENV_USER,
      password: env.ENV_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
    

};
