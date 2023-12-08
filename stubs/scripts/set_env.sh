#!/bin/bash

true > .env && \
doppler secrets download \
  --project "trustup-io-app-commons" \
  --config local \
  --no-file \
  --format env \
  >> .env
doppler secrets download \
  --project {{{{packageName}}}} \
  --config local \
  --no-file \
  --format env | grep -v '^DOPPLER_' \
  >> .env