# SigmaApi

## Description

This project is a user authentication service implemented with Node.js, Express, and MongoDB. It handles user registration, login, token management, and allows users to create, update, and delete posts. The system provides secure authentication via JWT tokens and ensures that each user can manage their own posts.

### Features:
- User registration with hashed password storage.
- User login with email and password verification.
- JWT token generation for user authentication (both access and refresh tokens).
- Create, update, and delete posts for users.
- Each user can only manage their own posts.

## Technologies Used
- **Node.js**: Backend framework for the service.
- **Express**: Web framework to build RESTful API endpoints.
- **MongoDB**: Database to store user details and post data.
- **JWT (JSON Web Tokens)**: Used for creating and verifying access tokens.
- **Swagger**: API documentation tool to easily explore and interact with the available endpoints.

## Installation

To set up and run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/project-name.git

2. Install dependencies:
   ```bash
      cd project-name
   npm install

3. Create a .env file for environment variables
   Make sure to create a .env file in the root directory with the following variables:
   ```bash
   
4. Start the server:
   ```bash

## Swagger API Documentation

All available API endpoints can be explored and tested interactively using Swagger. To access the documentation, navigate to:

```bash
http://localhost:3000/api-docs
