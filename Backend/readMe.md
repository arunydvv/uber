
# Backend API Documentation

## `/user/register` Endpoint

### Description
The `/user/register` endpoint allows users to register by providing their full name, email, and password. The password is hashed before storing in the database, and a JWT token is generated for authentication upon successful registration.

### Request Method
`POST`

### Request Body
The request body should contain the following fields:

- `email` (string, required): The email address of the user. It must be a valid email format.
- `fullname` (object, required): Contains the user's full name.
  - `firstname` (string, required): First name of the user (at least 3 characters).
  - `lastname` (string, required): Last name of the user (at least 3 characters).
- `password` (string, required): The password for the user (at least 8 characters).
### Example Request:
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "password123"
}