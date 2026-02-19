#!/bin/bash

# Clean up the existing deployment directory completely (including hidden files)
echo "Cleaning up /var/www/backend directory"
rm -rf /var/www/backend
mkdir -p /var/www/backend

