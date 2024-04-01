export default ({ env }) => {
  // Shared configuration
  const config = {
    app: {
      keys: env.array('APP_KEYS'),
    },
  };

  // Development configuration
  if (env('NODE_ENV') === 'development') {
    Object.assign(config, {
      host: env('HOST', '0.0.0.0'),
      port: env.int('PORT', 1337),
      webhooks: {
        populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
      },
    });
  }

  // Production configuration
  if (env('NODE_ENV') === 'production') {
    Object.assign(config, {
      proxy: true,
      url: env('APP_URL'),
      admin: {
        path: '/admin',
        build: {
          backend: env('APP_URL'),
        },
      },
    });
  }

  // Return appropriate configuration
  return config;
};
