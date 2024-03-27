
module.exports = ({ env }) => ({
  connection: {
    connectionString: env('DATABASE_URL'),
    host: env('DATABASE_HOST', 'localhost'),
    port: env.int('DATABASE_PORT', 5432),
    database: env('DATABASE_NAME', 'postgres'),
    user: env('DATABASE_USERNAME', 'postgres'),
    password: env('DATABASE_PASSWORD', '0000'),
    ssl: env.bool('DATABASE_SSL', false) && {
      key: env('DATABASE_SSL_KEY', undefined),
      cert: env('DATABASE_SSL_CERT', undefined),
      ca: env('DATABASE_SSL_CA', undefined),
      capath: env('DATABASE_SSL_CAPATH', undefined),
      cipher: env('DATABASE_SSL_CIPHER', undefined),
      rejectUnauthorized: false,
    },
    schema: env('DATABASE_SCHEMA', 'public'),
  },
  pool: {min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10)},
});
