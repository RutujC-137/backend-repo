#!/bin/bash

echo "Starting application"

cd /var/www/backend

pm2 start npm --name "backend" -- start --port 4000
pm2 save
