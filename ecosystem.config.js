// PM2 Ecosystem File
// ─────────────────────────────────────────────────────────────
// Each EC2 instance keeps its OWN version of this file.
// Only change the NODE_ENV value to match the environment.
//
//  DEV EC2    → NODE_ENV: 'dev'
//  QA EC2     → NODE_ENV: 'qa'
//  PREPROD EC2 → NODE_ENV: 'preprod'
//  PROD EC2   → NODE_ENV: 'prod'
//
// To start:  pm2 start ecosystem.config.js
// To restart: pm2 restart ecosystem.config.js
// ─────────────────────────────────────────────────────────────

module.exports = {
  apps: [
    {
      name: 'backend',
      script: 'index.js',
      watch: false,
      env: {
        NODE_ENV: 'dev'   // ← CHANGE THIS per EC2: dev | qa | preprod | prod
      }
    }
  ]
};
