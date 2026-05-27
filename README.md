# Posts & Comments REST API 📝
### Node.js + Express Collaborative Backend Project

> A RESTful API for managing posts and comments, built collaboratively using Git workflows — pull requests, branches, and code review.

---

## 🔍 Project Overview

A collaborative academic project implementing a **REST API** with Node.js and Express. The API supports managing posts and comments stored in a database, with all endpoints documented via a `request.rest` file.

The project was built collaboratively — each team member was responsible for implementing half of the API endpoints, integrating work via Git pull requests.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Language | JavaScript |
| Architecture | MVC (Model-View-Controller) |
| API Testing | REST Client (`request.rest`) |

---

## ✅ Project Structure

```
├── controller/         # Request handlers (business logic)
├── model/              # Data models and DB schemas
├── routes/             # Express route definitions
├── app.js              # Application entry point
└── request.rest        # API request examples for testing
```

---

## 📡 API Endpoints

### Posts

| Method | Endpoint | Description |
|---|---|---|
| GET | `/post` | Get all posts |
| GET | `/post/:id` | Get a single post by ID |
| GET | `/post?sender=<id>` | Get all posts by a specific sender |
| POST | `/post` | Add a new post |
| PUT | `/post/:id` | Update a post by ID |

### Comments

| Method | Endpoint | Description |
|---|---|---|
| GET | `/comment` | Get all comments |
| GET | `/comment/:id` | Get a comment by ID |
| GET | `/comment?post=<id>` | Get all comments for a specific post |
| POST | `/comment` | Create a new comment |
| PUT | `/comment/:id` | Update a comment |
| DELETE | `/comment/:id` | Delete a comment |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v16+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YuvalKotlovsky/Development_Project.git
cd Development_Project

# Install dependencies
npm install

# Start the server
npm start
```

The server will start on `http://localhost:3000`

---

## 🧪 Testing the API

All API requests are documented and ready to run in the `request.rest` file. Use the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) VS Code extension to run them directly.

```
# Example from request.rest

### Get all posts
GET http://localhost:3000/post

### Get post by ID
GET http://localhost:3000/post/64abc123

### Create a post
POST http://localhost:3000/post
Content-Type: application/json

{
  "title": "My first post",
  "content": "Hello world!",
  "sender": "user123"
}
```

---

## 🤝 Collaboration

This project was built collaboratively using Git best practices:

- Feature development on separate **branches**
- Changes submitted via **pull requests**
- Code reviewed before merging to `main`
- Each contributor implemented half of the API endpoints independently

---

