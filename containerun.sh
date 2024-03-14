#!/bin/bash
set -e

image="qiaoogan/testexeteer:0.0.1"

docker container run --user 0 --rm --mount type=bind,source="$(pwd)",target=/home/pptruser \
  -e testLevel="smoke" \
  -e testEnv="cloud" \
  $image \
  bash /home/pptruser/containerun-entry.sh