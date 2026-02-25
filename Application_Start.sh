#!/bin/bash

echo "Starting application"

cd /var/www/backend

# Use direct node start to be more robust than 'npm start' in PM2
# We set NODE_ENV and PORT directly via environment variables
PORT=4000 NODE_ENV=dev pm2 start index.js --name "backend" --cwd /var/www/backend
pm2 save

