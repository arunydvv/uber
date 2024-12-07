# User Authentication - Register & Login Routes

## Overview

This section of the API handles user registration and login. The routes allow users to create an account and authenticate using email and password.

## Routes

### `POST /api/users/register`
- **Description**: Registers a new user.
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "password": "strongpassword123"
  }`` 

-   **Response**:
    -   Status 200: Success
        
        json
        
        Copy code
        
        ```{
          "token": "jwt_token_here",
          "user": {
            "_id": "user_id",
            "fullname": {
              "firstname": "John",
              "lastname": "Doe"
            },
            "email": "user@example.com"
          }
        }` 
        
    -   Status 400: Validation error
        
        json
        
        Copy code
        
        ```{
          "message": "Validation error: email is required, password must be at least 8 characters long"
        }` 
        
    -   Status 500: Server error

### `POST /api/users/login`

-   **Description**: Logs in an existing user with the email and password.
-   **Request Body**:
    
    json
    
    Copy code
    
    ```{
      "email": "user@example.com",
      "password": "strongpassword123"
    }` 
    
-   **Response**:
    -   Status 200: Success
        
        json
        
        Copy code
        
        ```{
          "token": "jwt_token_here",
          "user": {
            "_id": "user_id",
            "fullname": {
              "firstname": "John",
              "lastname": "Doe"
            },
            "email": "user@example.com"
          }
        }` 
        
    -   Status 401: Invalid credentials
        
        json
        
        Copy code
        
        ```{
          "message": "Invalid email or password"
        }` 
        
    -   Status 500: Server error

## Authentication

The `POST /api/users/login` route returns a JWT token upon successful authentication. This token is used for subsequent requests to protected routes.

## Setup Instructions

1.  Clone the repository:
    
    bash
    
    Copy code
    
    `git clone https://github.com/your-repo/user-auth-api.git` 
    
2.  Install dependencies:
    
    bash
    
    Copy code
    
    `cd user-auth-api
    npm install` 
    
3.  Set up environment variables:
    
    bash
    
    Copy code
    
    ```JWT_SECRET=your_jwt_secret
    MONGO_URI=your_mongodb_connection_string` 
    
4.  Run the server:
    
    bash
    
    Copy code
    
    `npm start`




# User Authentication - Profile & Logout Routes

## Overview

This section of the API provides the functionality for retrieving the user's profile and logging the user out, invalidating the authentication token.

## Routes

### `GET /api/users/profile`
- **Description**: Retrieves the profile of the logged-in user.
- **Authentication**: Requires a valid Bearer token.
- **Request**: 
  - The token must be included in the `Authorization` header as follows:
    ```
    Authorization: Bearer <jwt_token>
    ```
- **Response**:
  - Status 200: Success
    ```json
    {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "user@example.com"
    }
    ```
  - Status 404: User profile not found
    ```json
    {
      "message": "User profile not found"
    }
    ```
  - Status 500: Server error

### `GET /api/users/logout`
- **Description**: Logs the user out by invalidating the token.
- **Authentication**: Requires a valid Bearer token.
- **Request**: 
  - The token must be included in the `Authorization` header as follows:
    ```
    Authorization: Bearer <jwt_token>
    ```
- **Response**:
  - Status 200: Success
    ```json
    {
      "message": "Logged out successfully"
    }
    ```
  - Status 500: Server error

## Authentication

Both routes require the user to include a Bearer token in the `Authorization` header. This token is generated during login and should be stored securely on the client side.


