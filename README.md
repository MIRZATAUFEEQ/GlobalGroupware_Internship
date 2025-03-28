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

Bonus Features

Client-side search and filtering on the user list

Hosted on a public server

Responsive design for both mobile and desktop

Contribution Guidelines

Fork the repository.

Create a new branch (feature-branch-name).

Commit your changes.

Push to your fork and submit a pull request.

License

This project is open-source and available under the MIT License.

For any issues or feature requests, please raise an issue on GitHub. 🚀

