#!/bin/bash

rm -rf node_modules allure-report allure-results test-screenshots
pwd && ls -al
npm install

export EXECUTE_ENV=container
npm run test
test_exit_code=$?

npm run allure-generate
last_exit_code=$?

if [ $test_exit_code -ne 0 ] || [ $last_exit_code -ne 0 ]; then
    echo "Test Failed"
    exit 1
else
    echo "Test Completed"
fi