#!/bin/bash

# Clean up the existing deployment directory to prevent "file already exists" errors
echo "Cleaning up /var/www/backend directory"
rm -rf /var/www/backend/*
mkdir -p /var/www/backend
