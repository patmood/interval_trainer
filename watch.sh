#!/bin/bash

xargs coffee -w -b -j main.js \
             -c << EOF
                fitness.coffee
