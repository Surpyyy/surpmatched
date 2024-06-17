#!/usr/bin/env sh

# abort on errors
set -e

# Function to handle errors
error_exit() {
    echo "Error occurred in script execution. Exiting."
    read -p "Press any key to continue..."
    exit 1
}

# Trap errors
trap 'error_exit' ERR

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Surpyyy/surpmatched.git main:gh-pages

cd -

# Pause at the end of the script
read -p "Script completed. Press any key to exit..."