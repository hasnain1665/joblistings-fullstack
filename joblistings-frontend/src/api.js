import axios from "axios";
const API = axios.create({ baseURL: "http://127.0.0.1:5000" });
export const fetchJobs = (page = 1, perPage = 10, query = "") =>
  API.get(`/jobs?page=${page}&per_page=${perPage}&${query}`);
export const createJob = (job) => API.post("/jobs", job);
export const deleteJob = (id) => API.delete(`/jobs/${id}`);
