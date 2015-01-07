#!/bin/sh

#Bower installs packages to bower_components/ directory
bower install

#Run the optimizer passing the build profile's file name 'app.build.js' and 'app.build.css'
#The optimizer will create two files name: 'src/js/main.min.js' and 'src/css/main.min.css'
cd src/js
node  ../../bower_components/r.js/dist/r.js -o app.build.js
node  ../../bower_components/r.js/dist/r.js -o app.build.css
cd -

#Remove the packages after running the optimize
rm -rf bower_components

