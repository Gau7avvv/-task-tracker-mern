import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5002/api/tasks",
});

export const getTasks = () => API.get("/");
export const createTask = (data) => API.post("/", data);
export const deleteTask = (id) => API.delete(`/${id}`);