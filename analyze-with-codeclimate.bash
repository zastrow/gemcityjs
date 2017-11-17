#!/bin/bash -ex

# CODE_CLIMATE_API_KEY  (Required) API Key for the Code Climate organization
# CODE_CLIMATE_REPO_ID  (Required) ID for the Code Climate repository
# BITBUCKET_BRANCH      (Provided) Current branch for the commit

# BITBUCKET_BRANCH=`git rev-parse --abbrev-ref HEAD`
curl --fail \
    --data api_token=${CODE_CLIMATE_API_KEY} \
    https://codeclimate.com/api/repos/${CODE_CLIMATE_REPO_ID}/branches/${BITBUCKET_BRANCH}/refresh
