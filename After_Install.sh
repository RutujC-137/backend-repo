#!/bin/bash

cd /var/www/backend
rm -rf build

# Clean up the existing deployment directory completely (including hidden files)

echo "Cleaning up /var/www/backend directory"
sudo apt-get upgrade -y
sudo npm -f install
npm run build:dev 
npm install 