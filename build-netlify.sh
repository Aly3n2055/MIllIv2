
#!/bin/bash

# Exit on error
set -e

# Install dependencies
npm install

# Build the application
npm run build

# Create Netlify functions directory if it doesn't exist
mkdir -p netlify/functions

# Copy necessary files to publish directory
cp -r dist/public/* dist/

# Ensure directory permissions are correct
chmod -R 755 dist/
