#!/bin/bash
cd /var/www/backend

# Install dependencies
npm install

# Restart PM2 with environment file
pm2 restart backend || pm2 start index.js --name backend --env production
pm2 save
