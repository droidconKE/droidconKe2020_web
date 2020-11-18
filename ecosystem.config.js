module.exports = {
  apps: [{
    name: 'droidconKe',
    exec_mode: 'cluster', // enables clustering
    instances: 'max',
    script: './node_modules/nuxt/bin/nuxt.js',
    args: 'start'
  }],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
}
