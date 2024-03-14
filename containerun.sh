#!/bin/bash
set -e

image="qiaoogan/testexeteer:0.0.1"

docker container run --rm --mount type=bind,source="$(pwd)",target=/home \
  -e testLevel="smoke" \
  -e testEnv="cloud" \
  $image \
  bash /home/containerun-entry.sh