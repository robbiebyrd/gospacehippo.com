#!/bin/bash
echo "Removing old builds"
rm -rf out/
echo "Building..."
yarn build
echo "Syncing New Build..."
gcloud storage rsync -J -r --delete-unmatched-destination-objects --checksums-only ./out/ gs://$GOOGLE_CLOUD_BUCKET/
echo "Clearing the CDN cache..."
nohup gcloud  --project $GOOGLE_CLOUD_PROJECT compute url-maps invalidate-cdn-cache $GOOGLE_CLOUD_CDN --path "/*" &
echo "Complete!"
