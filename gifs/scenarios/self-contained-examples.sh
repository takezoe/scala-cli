#!/bin/bash

########################
# include the magic
########################

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)

if [[ -z "${ASCIINEMA_REC}" ]]; then
  # Warm up scala-cli
  echo "println(1)" | scala-cli -
  # or do other preparation (e.g. create code)
else
  . $SCRIPT_DIR/../demo-magic.sh
  # # hide the evidence
  clear

  # Put your stuff here
  pe "scala-cli https://gist.github.com/alexarchambault/7b4ec20c4033690dd750ffd601e540ec"

  sleep 3
  clear 

  pe "scala-cli https://gist.github.com/lwronski/99bb89d1962d2c5e21da01f1ad60e92f"

  sleep 2
  
  pe "scala-cli https://gist.github.com/lwronski/99bb89d1962d2c5e21da01f1ad60e92f -M ScalaCli"

  # Wait a bit to read output of last command
  sleep 2
  echo " "
fi