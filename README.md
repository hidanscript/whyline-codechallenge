# Whyline Coding Challenge

Created by David Ortiz Marcano

## Requirements

- MongoDB >= v4.0.0
- Node.js >= v16.15.1 (Current lts)
- ✨ Magic ✨

## Features

- CRUD Endpoints for Clients
- CRUD Endpoints for Members
- You can now create notes for each member

## Installation

This app requires [Node.js](https://nodejs.org/) v16+ to run.

create a custom .env file on the project's root folder or use the default sample.env file
```sh
cd whyline-codechallenge
touch .env
# OR
sample.env -> rename -> .env
```

Install the dependencies and devDependencies and start the server.

```sh
cd whyline-codechallenge
npm install
npm run dev
```

For production environments...

```sh
npm install
npm start
```

## Project structure

```
$PROJECT_ROOT
│   # API files, models, controllers and routers
├── api
│   # Basic server and database configuration
├── config
│   # tests folder for future unit testing code
└── tests
```