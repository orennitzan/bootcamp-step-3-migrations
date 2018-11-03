const joi = require('joi')

const envVarsSchema = joi.object({
  PORT: joi.number().min(99).max(9999).required(),
  NODE_ENV: joi.string()
    .allow(['development', 'production', 'test'])
    .default('production'),
  PROCESS_TYPE: joi.string()
    .allow(['web', 'worker'])
    .required(),
  LOG_LEVEL: joi.string()
    .allow(['test', 'error', 'warn', 'info', 'verbose', 'debug', 'silly'])
    .when('NODE_ENV', {
      is: 'development',
      then: joi.default('silly')
    })
    .when('NODE_ENV', {
      is: 'production',
      then: joi.default('info')
    })
    .when('NODE_ENV', {
      is: 'test',
      then: joi.default('warn')
    }),
  DB_USER: joi.string().required(),
  DB_PASS: joi.string().required(),
  DB_HOST: joi.string().required(),
  DB_NAME: joi.string().required(),
  DB_PORT: joi.number().required(),
})
  .unknown().required()

const envVars = joi.attempt(process.env, envVarsSchema)

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  process: {
    type: envVars.PROCESS_TYPE
  },
  logger: {
    level: envVars.LOG_LEVEL
  },
  db: {
    user: envVars.DB_USER,
    password: envVars.DB_PASS,
    host: envVars.DB_HOST,
    port: envVars.DB_PORT,
    dbname: envVars.DB_NAME
  }
}

module.exports = config

/* 

require('dotenv').config();

const config = {
  FILES_LOCATION: 'LOCATION',
  DBNAME: process.env.DBNAME || 'risingstauck',
  POSTGRES_CONFIG: {
    user: 'postgres',
    host: 'localhost',
    database: 'risingstack',
    password: 'P123456',
    port: 5432
  }
};

module.exports = { config };
*/