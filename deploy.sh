# set executable permission
# chmod +x deploy.sh

# Build the app
echo ">>> Building the site"
mkdocs build --clean
echo ">>> Building completed"
echo ">>> Deploy the app to S3"
aws s3 cp site s3://aws-study.shams-nahid.com/ --recursive
echo ">>> Deployment completed"