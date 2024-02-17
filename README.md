# Express API Starter

test

How to use this template:

```sh
npx create-express-api --directory my-api-name
```

Includes API Server utilities:

* [morgan](https://www.npmjs.com/package/morgan)
  * HTTP request logger middleware for node.js
* [helmet](https://www.npmjs.com/package/helmet)
  * Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
* [dotenv](https://www.npmjs.com/package/dotenv)
  * Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
* [cors](https://www.npmjs.com/package/cors)
  * CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Development utilities:

* [nodemon](https://www.npmjs.com/package/nodemon)
  * nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [eslint](https://www.npmjs.com/package/eslint)
  * ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [jest](https://www.npmjs.com/package/jest)
  * Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* [supertest](https://www.npmjs.com/package/supertest)
  * HTTP assertions made easy via superagent.

## Setup

```
npm install
```

## Lint

```
npm run lint
```

## Test

```
npm test
```

## Development

```
npm run dev

```

## Description
 
This project implements a RESTful API server using Express.js and SQLite3. It provides endpoints to manage products and cars data.
 
## Datastore
 
The application uses SQLite3 as the database management system. The database contains two tables: `products` and `students`.
 
### Products Table
 
The `products` table stores information about products. Each product has the following attributes:
 
- `id`: Unique identifier for the product (automatically generated).
- `name`: Name of the product.
- `price`: Price of the product.
 
### Students Table
 
The `students` table stores information about cars. Each car has the following attributes:
 
- `id`: id of student.
- `name`: name of student.
 
## Endpoints
 
### Products Endpoints
 
- `GET /products`: Retrieve a list of all products.
- `GET /products/:id`: Retrieve details of a specific product.
- `POST /products`: Add a new product.
- `DELETE /products/:id`: Delete a specific product.
 
### Students Endpoints
 
- `GET /students`: Retrieve a list of all students.
- `GET /students/:id`: Retrieve details of a specific student.
- `POST /students`: Add a new student.
- `DELETE /students/:id`: Delete a student.
```
