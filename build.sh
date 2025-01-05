#!/bin/bash

exec 2>&1

# If the repo is not there then we have nothing to build. Exit
[ ! -d "./peerjs" ] && echo "PeerJS source code not found at ./peerjs. Clone it from https://github.com/peers/peerjs.git" && exit

rm -rf dist/
cd peerjs
git apply ../patch/base_code_changes.diff

# Generate a file documenting the changes made to peerjs source code for future reference

# Build the existing peerjs project into ../dist
../node_modules/.bin/parcel build --no-source-maps --target module
cd ../

# Append some of our modifications onto the built peerjs code
mkdir dist
cat patch/header_patch.js peerjs/dist/bundler.mjs patch/footer_patch.js > dist/peerjs-on-node.js

echo "Done. dist/peerjs-on-node.js"
