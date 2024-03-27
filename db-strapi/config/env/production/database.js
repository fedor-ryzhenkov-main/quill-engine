
module.exports = ({ env }) => ({
  connection: {
    host: env('DATABASE_HOST', 'localhost'),
    port: env.int('DATABASE_PORT', 5432),
    database: env('DATABASE_NAME', 'postgres'),
    user: env('DATABASE_USERNAME', 'postgres'),
    password: env('DATABASE_PASSWORD', '0000'),
    sslmode: 'disable',
    ssl: {
      rejectUnauthorized: false,
    },
    schema: env('DATABASE_SCHEMA', 'public'),
  },
  pool: {min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10)},
});
