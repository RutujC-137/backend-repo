#!/bin/bash

echo "Stopping backend"
pm2 stop backend || true
pm2 delete backend || true
