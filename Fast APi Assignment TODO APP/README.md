# Todo API

This is a simple RESTful API built with FastAPI for managing todo items.

## Prerequisites
- Python 3.9+
- Poetry (Python package installer)

## Installation

1. Clone this repository:

2. Navigate to the project directory:

3. Install dependencies:
    `poetry update`

## Usage

1. Ensure that your database is configured. The provided configuration assumes PostgresSQL. If you wish to use a different database, modify `database.py` accordingly.

2. Start the API server:
          `poetry run dev`

This will start the server on `http://127.0.0.1:8080` by default.

## Endpoints

### Get Single Todo
- **URL:** `/todo/{id}`
- **Method:** `GET`
- **Parameters:**
  - `id`: ID of the todo item to retrieve
- **Response:**
  - 200 OK: Returns the todo item if found
  - 404 Not Found: If the todo item with the specified ID does not exist

### Get All Todos
- **URL:** `/todos`
- **Method:** `GET`
- **Query Parameters:**
  - `skip`: Number of records to skip (default: 0)
  - `limit`: Maximum number of records to return (default: 100)
- **Response:**
  - 200 OK: Returns a list of todo items

### Create Todo
- **URL:** `/todo`
- **Method:** `POST`
- **Request Body:**
  - JSON object representing the todo item to create
- **Response:**
  - 200 OK: Returns the created todo item

### Delete Todo
- **URL:** `/deletetodo/{id}`
- **Method:** `DELETE`
- **Parameters:**
  - `id`: ID of the todo item to delete
- **Response:**
  - 200 OK: If the todo item is deleted successfully
  - 404 Not Found: If the todo item with the specified ID does not exist

### Update Todo
- **URL:** `/updatetodo`
- **Method:** `PUT`
- **Request Body:**
  - JSON object representing the updated todo item
- **Response:**
  - 200 OK: Returns the updated todo item
  - 404 Not Found: If the todo item with the specified ID does not exist

## Dependency Injection
The API uses dependency injection to manage database connections. The `get_db` function provides a database session to each endpoint function, ensuring efficient database usage and proper resource management.


## Author
## DevMianHaroon

