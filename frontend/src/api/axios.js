import axios from "axios";

// In production (Vercel) this comes from the VITE_API_URL env var you set
// on the frontend project (pointing at your deployed backend). Locally it
// falls back to your backend running on port 5001.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5001/api",
});

export default api;
