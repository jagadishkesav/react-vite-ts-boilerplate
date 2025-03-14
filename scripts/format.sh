#!/bin/bash
set -e # exit immediately on error
arg=$1
echo "Command argument: $arg"

EXIT_CODE=0

FRONTEND_PATH="."

echo ""
if [ "$arg" == "--fix" ]; then
    echo "Prettier. Checking formatting and fixing ..."
    npx prettier --write $FRONTEND_PATH || EXIT_CODE=$?
else
    echo "Prettier. Checking formatting for frontend directory..."
    npx prettier --check $FRONTEND_PATH || EXIT_CODE=$?
fi

echo "Prettier. Done"
echo ""
echo "Format script exit code: $EXIT_CODE"
exit $EXIT_CODE
