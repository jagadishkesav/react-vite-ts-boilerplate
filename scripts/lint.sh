#!/bin/bash
set -e # Exit immediately on error
arg=$1
echo "Command argument: $arg"

EXIT_CODE=0

echo ""
if [ "$arg" == "--fix" ]; then
    echo "ESLint. Checking rules and fixing..."
    eslint --fix "src/**/*.{js,ts,tsx}" || EXIT_CODE=$?
else
    echo "ESLint. Checking rules..."
    eslint --max-warnings=0 "src/**/*.{js,ts,tsx}" || EXIT_CODE=$?
fi
echo "ESLint. Done"
echo ""
echo "Knip. Looking for unused exports..."

knip || EXIT_CODE=$?
echo "Knip. Done"
echo ""
echo "Lint script exit code: $EXIT_CODE"
exit $EXIT_CODE
