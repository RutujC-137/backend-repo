#!/bin/bash
# ─────────────────────────────────────────────────────────────
# Backend Deployment Script (runs on EC2 after CodeDeploy)
#
# This script:
#  1. Goes to the backend deployment folder
#  2. Installs production npm packages
#  3. Restarts PM2 using ecosystem.config.js
#
# ecosystem.config.js sets NODE_ENV (dev / qa / preprod / prod)
# index.js reads NODE_ENV and loads the matching .env.{NODE_ENV} file
# ─────────────────────────────────────────────────────────────

set -e

cd /var/www/backend

echo "Installing npm packages..."
npm install --omit=dev

echo "Starting/restarting backend with PM2..."
pm2 restart ecosystem.config.js --update-env || pm2 start ecosystem.config.js

echo "Saving PM2 process list..."
pm2 save

echo "Backend deployment complete."
