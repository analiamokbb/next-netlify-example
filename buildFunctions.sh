#!/bin/sh

proxy_dir="backend/dist"

if [ -d "$proxy_dir" ] ; then
  rm -rf "$proxy_dir"
  mkdir "$proxy_dir"
fi

webpack --config webpack.functions.ts || exit 1
