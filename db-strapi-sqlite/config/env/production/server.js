
module.exports = ({ env }) => ({
  proxy: true,
  url: env('APP_URL'),
  app: {
    keys: env.array('APP_KEYS')
  },
  admin: {
    // ...
    path: '/admin',
    build: {
      backend: env('ADMIN_BUILD_BACKEND', 'https://quill-engine-app-emz7p.ondigitalocean.app'),
    },
  },
});
