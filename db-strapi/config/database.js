module.exports = ({ env }) => {
  // Shared configuration
  let config = {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'postgres'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', '0000'),
      },
    },
  };

  // Specific configuration for development
  if (env('NODE_ENV') === 'development') {
    Object.assign(config.connection.connection, {
      ssl: env.bool('DATABASE_SSL', false) && {
        key: env('DATABASE_SSL_KEY'),
        cert: env('DATABASE_SSL_CERT'),
        ca: env('DATABASE_SSL_CA'),
        capath: env('DATABASE_SSL_CAPATH'),
        cipher: env('DATABASE_SSL_CIPHER'),
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
      },
    });
  }

  // Specific configuration for production
  if (env('NODE_ENV') === 'production') {
    Object.assign(config.connection.connection, {
      sslmode: 'disabled',
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    });
    config.connection.debug = false;
  }

  // Return configuration
  return config;
};
