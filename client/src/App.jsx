import { useEffect, useState } from "react";
import axios from "axios";

// ✅ FIXED API URL
const API = "http://localhost:5002/api/tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // GET TASKS
  const getTasks = async () => {
    try {
      const res = await axios.get(API);
      setTasks(res.data.data || []);
    } catch (err) {
      console.log("GET ERROR:", err.message);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  // ADD TASK
  const addTask = async () => {
    if (!title.trim()) return;

    try {
      await axios.post(API, { title });
      setTitle("");
      getTasks();
    } catch (err) {
      console.log("ADD ERROR:", err.message);
    }
  };

  // DELETE TASK
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getTasks();
    } catch (err) {
      console.log("DELETE ERROR:", err.message);
    }
  };

  // TOGGLE TASK
  const toggleTask = async (task) => {
    try {
      await axios.put(`${API}/${task._id}`, {
        completed: !task.completed,
      });
      getTasks();
    } catch (err) {
      console.log("TOGGLE ERROR:", err.message);
    }
  };

  return (
    <div style={styles.bg}>
      <div style={styles.container}>
        <h1 style={styles.heading}>⚡ TaskFlow</h1>
        <p style={styles.sub}>Organize your tasks like a pro developer</p>

        <div style={styles.inputBox}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What do you need to do?"
            style={styles.input}
          />
          <button onClick={addTask} style={styles.addBtn}>
            + Add
          </button>
        </div>

        <div style={styles.list}>
          {tasks.length === 0 ? (
            <p style={styles.empty}>No tasks yet. Add one 🚀</p>
          ) : (
            tasks.map((t) => (
              <div key={t._id} style={styles.card}>
                <div
                  onClick={() => toggleTask(t)}
                  style={{
                    ...styles.taskText,
                    textDecoration: t.completed ? "line-through" : "none",
                    opacity: t.completed ? 0.6 : 1,
                  }}
                >
                  {t.title}
                </div>

                <div style={styles.actions}>
                  <span
                    style={{
                      ...styles.badge,
                      background: t.completed ? "#22c55e" : "#f59e0b",
                    }}
                  >
                    {t.completed ? "Done" : "Pending"}
                  </span>

                  <button
                    onClick={() => deleteTask(t._id)}
                    style={styles.deleteBtn}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// styles (same as yours)
const styles = {
  bg: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    fontFamily: "sans-serif",
  },
  container: {
    width: "450px",
    padding: "20px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
    color: "white",
  },
  heading: { textAlign: "center", fontSize: "28px" },
  sub: { textAlign: "center", fontSize: "12px", opacity: 0.7 },
  inputBox: { display: "flex", gap: "10px", margin: "20px 0" },
  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
  },
  addBtn: {
    padding: "12px 16px",
    borderRadius: "10px",
    border: "none",
    background: "#3b82f6",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
  list: { display: "flex", flexDirection: "column", gap: "12px" },
  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.08)",
  },
  taskText: { cursor: "pointer", fontSize: "14px", flex: 1 },
  actions: { display: "flex", gap: "10px", alignItems: "center" },
  badge: { fontSize: "10px", padding: "4px 8px", borderRadius: "20px" },
  deleteBtn: {
    background: "transparent",
    border: "none",
    color: "#ef4444",
    fontSize: "16px",
    cursor: "pointer",
  },
  empty: { textAlign: "center", opacity: 0.6 },
};