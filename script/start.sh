#!/usr/bin/env sh

pm2 start ./dist/main.js --name bemobi;
pm2 logs;
