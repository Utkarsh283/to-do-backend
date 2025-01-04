# Todo App API

This is a simple Todo application API built with Node.js and Express, connected to a MongoDB database.


## Overview

This project is a simple Todo application API built with Node.js and Express, connected to a MongoDB database. The API is designed to allow users to register, log in, and create, read, update, and delete tasks.

The API is built with the following technology stack:

* Node.js: A JavaScript runtime for building server-side applications.
* Express: A web framework for Node.js that provides a flexible and modular way to build web applications.
* MongoDB: A NoSQL database that stores data in a JSON-like format.
* Mongoose: An ORM (Object Relational Mapping) library for Node.js that provides a simple and intuitive way to interact with MongoDB.
* Bcrypt: A library for hashing and salting passwords.
* JSON Web Tokens (JWT): A library for generating and verifying JSON Web Tokens used for authentication and authorization.
* Postman: A tool for testing and debugging APIs.

The API provides the following endpoints:

* Register a user: `POST /users/register`
* Log in a user: `POST /users/login`
* Create a task: `POST /tasks`
* Get all tasks: `GET /tasks`
* Get a task by ID: `GET /tasks/:id`
* Update a task: `PUT /tasks/:id`
* Delete a task: `DELETE /tasks/:id`

## Install all the dependencies
1. Open a terminal and navigate to the root directory of the project.
2. Run `npm install` to install all the dependencies listed in `package.json`.


## Configuring .env file
Before running the API, make sure to edit the `.env` file to include your MongoDB URI. You can get this by creating a new cluster on MongoDB Atlas and clicking "Connect" -> "Connect your application". Replace `<username>`, `<password>`, and `<cluster_name>` with the values provided by MongoDB Atlas.

## Endpoints

### Register a user

1. Open Postman and create a new request.
2. Set the request URL to `http://localhost:8001/users/register`.
3. Select the request method (POST).
4. Add a JSON body for requests that require it. For example, to create a task, use:

    {
        "username": "sampleuser",
        "email": "user@example.com",
        "password": "password123"
    }

5. Click "Send" to send the request.
6. Copy the token generated after login and paste it in the `Authorization` header with the `Bearer` scheme. For example, `Bearer <token>`.

### Login a user

1. Open Postman and create a new request.
2. Set the request URL to `http://localhost:8001/users/login`.
3. Select the request method (POST).
4. Add a JSON body for requests that require it. For example, to login a user, use:

    {
        "email": "user@example.com",
        "password": "password123"
    }

5. Click "Send" to send the request.
6. Copy the token generated after login and paste it in the `Authorization` header with the `Bearer` scheme. For example, `Bearer <token>`.

### Create a task

1. Open Postman and create a new request.
2. Set the request URL to `http://localhost:8001/tasks`.
3. Select the request method (POST).
4. Add a JSON body for requests that require it. For example, to create a task, use:

    {
        "title": "Sample Task",
        "description": "This is a sample task description."
    }

5. Click "Send" to send the request.
6. Copy the token generated after login and paste it in the `Authorization` header with the `Bearer` scheme. For example, `Bearer <token>`.

### Get all tasks

1. Open Postman and create a new request.
2. Set the request URL to `http://localhost:8001/tasks`.
3. Select the request method (GET).
4. Click "Send" to send the request.
5. Copy the token generated after login and paste it in the `Authorization` header with the `Bearer` scheme. For example, `Bearer <token>`.

### Get a task by ID

1. Open Postman and create a new request.
2. Set the request URL to `http://localhost:8001/tasks/:id`.
3. Select the request method (GET).
4. Set the `id` parameter in the URL to the ID of the task you want to retrieve.
5. Click "Send" to send the request.
6. Copy the token generated after login and paste it in the `Authorization` header with the `Bearer` scheme. For example, `Bearer <token>`.

### Update a task by ID

1. Open Postman and create a new request.
2. Set the request URL to `http://localhost:8001/tasks/:id`.
3. Select the request method (PUT).
4. Set the `id` parameter in the URL to the ID of the task you want to update.
5. Add a JSON body for requests that require it. For example, to update a task, use:

    {
        "title": "Updated Task",
        "description": "This is an updated task description."
    }

6. Click "Send" to send the request.
7. Copy the token generated after login and paste it in the `Authorization` header with the `Bearer` scheme. For example, `Bearer <token>`.

### Delete a task by ID

1. Open Postman and create a new request.
2. Set the request URL to `http://localhost:8001/tasks/:id`.
3. Select the request method (DELETE).
4. Set the `id` parameter in the URL to the ID of the task you want to delete.
5. Click "Send" to send the request.
6. Copy the token generated after login and paste it in the `Authorization` header with the `Bearer` scheme. For example, `Bearer <token>`.

