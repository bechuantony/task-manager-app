const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const DATA_FILE = "./tasks.json";

const getTasks = () => {
  const data = fs.readFileSync(DATA_FILE, "utf8");
  return JSON.parse(data);
};

const saveTasks = (tasks) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
};

app.get("/tasks", (req, res) => {
  const tasks = getTasks();
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const tasks = getTasks();
  const newTask = {
    id: Date.now(),
    title: req.body.title,
    completed: false,
  };
  tasks.push(newTask);
  saveTasks(tasks);
  res.status(201).json(newTask);
});

app.patch("/tasks/:id/toggle", (req, res) => {
  const tasks = getTasks();
  const task = tasks.find((t) => t.id == req.params.id);
  if (task) {
    task.completed = !task.completed;
    saveTasks(tasks);
    res.json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));