#!/bin/bash

rm -rf node_modules allure-report allure-results test-screenshots
pwd && ls -al
npm install

export EXECUTE_ENV=container
npm run test
npm run allure-generate