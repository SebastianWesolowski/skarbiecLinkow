#!/bin/bash

# Odczytaj wartości z pliku JSON
CONFIG_FILE="customize.json"

# Sprawdź, czy plik JSON istnieje
if [ ! -f "$CONFIG_FILE" ]; then
    echo "Plik JSON ($CONFIG_FILE) nie istnieje."
    exit 1
fi

replace_in_file() {
    local placeholder="$1"
    local value="$2"
    local file="$3"
    sed -i.mybak "s/$placeholder/$value/g" "$file"
}

get_value_from_json() {
    local file="$1"
    local key="$2"
    local value
    value=$(grep "\"$key\"" "$file" | sed -n 's/.*: "\(.*\)",$/\1/p')
    echo "$value"
}

# Odczytaj zmienne z pliku JSON
FULL_NAME=$(get_value_from_json "$CONFIG_FILE" "FULL_NAME")
AUTHOR_PAGE=$(get_value_from_json "$CONFIG_FILE" "AUTHOR_PAGE")
GITHUB_USER=$(get_value_from_json "$CONFIG_FILE" "GITHUB_USER")
REPO_NAME=$(get_value_from_json "$CONFIG_FILE" "REPO_NAME")
NODE_VERSION=$(get_value_from_json "$CONFIG_FILE" "NODE_VERSION")
NPM_USER=$(get_value_from_json "$CONFIG_FILE" "NPM_USER")
URL=$(get_value_from_json "$CONFIG_FILE" "URL")

# Wyświetl odczytane wartości
echo "FULL_NAME: $FULL_NAME"
echo "AUTHOR_PAGE: $AUTHOR_PAGE"
echo "GITHUB_USER: $GITHUB_USER"
echo "REPO_NAME: $REPO_NAME"
echo "NODE_VERSION: $NODE_VERSION"
echo "URL: $URL"


# Use the sed command to edit files
# Create backup copies of the original files with the .mybak extension
# Then perform replacements in the files based on local variables

# Perform replacements in the .github/FUNDING.yml file
replace_in_file "PLACEHOLDER_FULL_NAME" "$FULL_NAME" ".github/FUNDING.yml"
replace_in_file "PLACEHOLDER_PAGE_AUTHOR" "$AUTHOR_PAGE" ".github/FUNDING.yml"

# Perform replacements in the git-conventional-commits.yaml file
replace_in_file "PLACEHOLDER_GITHUB_USER" "$GITHUB_USER" "git-conventional-commits.yaml"
replace_in_file "PLACEHOLDER_REPO_NAME" "$REPO_NAME" "git-conventional-commits.yaml"

# Perform replacements in the $URL text in files
#replace_in_file "PLACEHOLDER_URL" "$URL" "public/robots.txt"

# Clean up backup files
# shellcheck disable=SC2035
rm ./*.mybak
rm ./**/*.mybak


# Display a message upon completion
echo "Finished editing files."
