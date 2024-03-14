#!/usr/bin/env bash

# command examples:
    # > testLevel=smoke testEnv=local ./jest-structure.runner.sh
# > testLevel=regression testEnv=qa ./jest-structure.runner.sh

if ! [[ "$testLevel" =~ ^(smoke|regression)$ ]]; then
echo " missing testLevel environment variable: testLevel=(smoke|regression)"
exit 1
fi

if ! [[ "$testEnv" =~ ^(local|qa|uat|cloud)$ ]]; then
echo " missing testEnv environment variable: testEnv=(local|qa)"
exit 1
fi

screenshots_directory="test-results/test-screenshots"

if [ ! -d "$screenshots_directory" ]; then
  mkdir -p "$screenshots_directory"
fi

rm $screenshots_directory/*.png

echo -e "\\n============================ Run $testLevel test on $testEnv environment ============================\\n"
npx jest src/specs/