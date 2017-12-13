#!/usr/bin/env bash

yarn build
ls | grep -v build | xargs rm -rf
mv build/* . && rmdir build/
printf "Ready to deploy\n"
