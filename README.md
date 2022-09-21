# Collective Crunch Test

Basic CRUD functionalities for a sample dataset

## Installation

git clone from repo https://github.com/lizavetatkachuk/collective-crunch-test.git

Use npm to install dependencies
npm i

Install and configure Postgres, create a database called forest_db, change the db.config.ts file with corresponding values

Create.env file in the root directory and specify the following values PORT (of the app, default - 8080), NODE_ENV (=development), DB_NAME (your db-name, e.g. 'forest_db')

## Usage

Build the app
tsc or npm build

Run app
npm start

