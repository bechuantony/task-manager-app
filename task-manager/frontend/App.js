import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((res) => res.json())
      .then(setTasks);
  }, []);

  const addTask = async () => {
    const res = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle }),
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
    setNewTitle("");
  };

  const toggleTask = async (id) => {
    const res = await fetch(`http://localhost:3001/tasks/${id}/toggle`, {
      method: "PATCH",
    });
    const updatedTask = await res.json();
    setTasks(tasks.map((t) => (t.id === id ? updatedTask : t)));
  };

  return (
    <div>
      <h1>Tasks</h1>
      <input
        placeholder="Task Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        aria-label="New Task Title"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                aria-label={`Toggle ${task.title}`}
              />
              {task.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;