# ⚡ TaskFlow - MERN Task Manager
TaskFlow is a full-stack MERN application that helps users manage daily tasks. Users can create, view, update, and delete tasks with a simple and clean UI.
## 🚀 Features
- Add new tasks
- View all tasks
- Mark tasks as completed/pending
- Delete tasks
- Real-time UI updates
- REST API integration
- ## 🛠 Tech Stack
Frontend: React (Vite), CSS  
Backend: Node.js, Express.js  
Database: MongoDB (Mongoose)  
API: REST API  
## 📁 Project Structure
task-tracker-mern/
 ├── client/   (Frontend - React)
 ├── server/   (Backend - Node/Express)
 ├── package.json
 ## ⚙️ Run Locally

### 1. Clone repo
git clone https://github.com/your-username/task-tracker-mern.git

### 2. Install backend
cd server
npm install
npm run dev

### 3. Install frontend
cd client
npm install
npm run dev
## 🔗 API Routes

GET    /api/tasks       → Get all tasks  
POST   /api/tasks       → Create task  
PUT    /api/tasks/:id   → Update task  
DELETE /api/tasks/:id   → Delete task  
## 📸 UI Preview
![TaskFlow Screenshot](./screenshot.png)
## 👨‍💻 Author
Gaurav Pandey
## 🌟 Future Improvements
- Authentication (Login/Signup)
- Due dates for tasks
- Task categories
- Deployment on cloud
