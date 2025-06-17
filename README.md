# 📝 Task Manager (React + Node.js + Express)

This is a ** task manager** project built using **React**, **Node.js**, and **Express**. It uses a simple JSON file as a mock database, making it lightweight and easy to run locally.

## 🎯 Project Goal

This project is an open source project where you can contribute by:

- 🐛 Fix small bugs in logic or functionality
- 🧪 Add or improve test coverage
- 📝 Contribute documentation and code comments
- 🔧 Enhance accessibility and user experience
- 🚀 GitHub collaboration workflows (forks, branches, PRs)

---

## 🔧 Features

- View task list
- Add a new task
- Toggle task completion status

---

## 📂 Project Structure

task-manager/
├── backend/
│ ├── server.js # Express backend with JSON storage
│ └── tasks.json # Task data
│
└── frontend/
├── App.js # React frontend
└── App.test.js # Basic test

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager

2. Start the backend
bash
Copy
Edit
cd backend
npm install express cors
node server.js
Server runs at: http://localhost:3001

3. Start the frontend
If you don’t already have a React app:

bash
Copy
Edit
npx create-react-app frontend
Replace the default src/App.js and src/App.test.js with the ones in this repo, then:

bash
Copy
Edit
cd frontend
npm install
npm start

💡 Contribution Ideas
 Fix a toggle bug in server.js

 Add JSDoc comments or inline explanations

 Improve or refactor frontend logic

 Add accessibility features (ARIA labels, keyboard nav)

 Add helpful user messages or UI polish

 Improve testing coverage in App.test.js

📬 API Endpoints
Method	Endpoint	Description
GET	/tasks	Get all tasks
POST	/tasks	Add a new task
PATCH	/tasks/:id/toggle	Toggle task completion

🤝 How to Contribute
Fork the repo

Create a new branch (git checkout -b feature/YourFeature)

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature/YourFeature)

Open a Pull Request with a clear explanation

