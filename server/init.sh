# With this script you can initialize from scratch this Laravel project in Linux/macOS

# Installing dependencies without any interaction and output
composer install --no-interaction --quiet
# Creating the .env file, and generating a new application key
# The .env.example file in the starter kit contains all the necessary modifications, so we can use it
# It is not necessary to rewrite the DB configuration
cp .env.example .env
php artisan key:generate

# Creating an empty database file to make migartions run: database/database.sqlite
touch database/database.sqlite
# Creating a fresh migration
php artisan migrate:fresh
# Seed the database
php artisan db:seed
# Prepare a folder for file upload
mkdir ./storage/app/public
# Creating a symlink: /public/storage --> /storage/app/public
php artisan storage:link
# Starting the app
php artisan serve
