export default ({ env }) => {
  // Shared configuration
  const config = {
    app: {
      keys: env.array('APP_KEYS'),
    },
  };

  // Development configuration
  if (env('NODE_ENV') !== 'production') {
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
      url: `${env('APP_URL')}/db`,
      admin: {
        path: '/admin',
        build: {
          backend: env('ADMIN_BUILD_BACKEND', 'https://quill-engine-app-emz7p.ondigitalocean.app'),
        },
      },
    });
  }

  // Return appropriate configuration
  return config;
};
