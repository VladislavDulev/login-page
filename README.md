# Simple Login Page Challenge

Welcome to the Simple Login Page Challenge project. This project serves as a learning exercise for implementing a basic login page. The challenge provides specific requirements that you'll need to meet.

## Project Overview

In this project, you'll build a simple login page with the following features:

- **Login Page Components:**
  - Username and Password input fields
  - "Remember Me" checkbox
- **Username Field Validation:**
  - Ensures that the username field follows a valid email address format
- **Password Field Validation:**
  - Requires a minimum password length of 6 characters
  - Enforces the presence of at least one letter and one digit in the password
- **"Remember Me" Feature:**
  - Allows users to have their email remembered if the "Remember Me" checkbox is selected
- **Successful Login:**
  - Upon a successful login, the login form is replaced by a friendly greeting
  - A message is displayed with "Hi, {email}" to welcome the user (replace {email} with the user's email)
  - A "Logout" link appears to allow users to log out
- **Logout Feature:**
  - Clicking the "Logout" link returns users to the login form
- **Error Communication via Toastr:**
  - To provide clear and user-friendly error communication, this project uses the `react-toastify` library. When an error occurs, such as an incorrect username or password, a toastr notification is displayed to inform the user. This feature enhances the usability of the login page by ensuring that users are well-informed about any issues during the login process.

## Getting Started

To get started with this project:

1. Clone this repository to your local machine.
2. Istall Dependencies: `npm install`
3. Start the Project: `npm start`
