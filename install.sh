#!/bin/bash

echo "Installing dependencies"

cd /var/www/backend

# Ensure npm install succeeds before proceeding
npm install || { echo "npm install failed"; exit 1; }
