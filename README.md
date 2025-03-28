EmployWise Assignment

Project Overview

EmployWise is a React-based user management application that integrates with the Reqres API to handle authentication, user listing, editing, and deletion. This project demonstrates React fundamentals, state management, API interactions, and UI responsiveness.

Features

Authentication: Users can log in using provided credentials.

User List: Fetch and display paginated users from the Reqres API.

User Management: Edit and delete user details.

Pagination: Navigate through different pages of users.

Error Handling: Proper handling of API errors with user-friendly messages.

Persistent Login: Stores authentication token and redirects unauthenticated users to login.

Tech Stack

Frontend: React.js, Redux (optional), React Router

CSS Framework: Tailwind CSS (or any other)

API Requests: Axios

Deployment: Hosted on a free server

Installation & Setup

Clone the Repository:

git clone https://github.com/your-username/employwise.git
cd employwise

Install Dependencies:

npm install

Run the Development Server:

npm start

Access the Application:
Open http://localhost:3000/ in your browser.

API Endpoints Used

Login: POST /api/login

Get Users: GET /api/users?page=1

Update User: PUT /api/users/{id}

Delete User: DELETE /api/users/{id}

Deployment

The project is hosted on a free server. You can access it here:
Project Live Link

Contribution Guidelines

Fork the repository.

Create a new branch (feature-branch-name).

Commit your changes.

Push to your fork and submit a pull request.

License

This project is open-source and available under the MIT License.

For any issues or feature requests, please raise an issue on GitHub. 🚀




















# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
