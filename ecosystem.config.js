module.exports = {
  apps: [
    {
      name: 'xyd-wechat',
      script: './server/server.js',
      watch: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      env: {
        PORT: 18080,
        NODE_ENV: 'development'
      },
      env_production: {
        PORT: 18000,
        NODE_ENV: 'production'
      }
    }
  ],
  deploy: {
    production: {
      user: 'root',
      host: ['66.42.68.208'],
      ref: 'origin/master',
      repo: 'https://github.com/wyyx/school-island.git',
      path: '/www/xyd-wechat/production',
      'pre-deploy': 'git fetch origin master && git reset --hard origin/master',
      'post-deploy':
        'yarn start && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
}
