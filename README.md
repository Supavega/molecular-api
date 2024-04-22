# Molecular API 

This project is an API built with Node.js, Express, and MongoDB.

## Prerequisites

Before you begin, ensure you have installed Node.js and MongoDB on your machine.

## Installation

1. Clone the repository
```sh
  git clone https://github.com/yourusername/molecular-api.git 
```
2. Install dependencies
```sh
  cd molecular-api
  npm install
``` 

## Configuration

1. Create a .env file in the root directory of the project

```
  DB_CONNECTION=your_mongodb_connection_string
  TOKEN_SECRET=your_jwt_secret
```

## Starting the project

To start the project in production mode 
```sh
  npm start
```

To start the project in development mode
```sh
  npm run dev
```