import React, { useState } from "react";
import { useNavigate } from "react-router";
import adminApi from "../api/adminApi.js";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await adminApi.post("/admin/login", form);
      localStorage.setItem("adminToken", response.data.token);
      navigate("/admin/products");
    } catch (error) {
      setMsg(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="auth-shell">
      <div className="card chip-notch bg-panel p-8 w-full max-w-sm">
        <p className="eyebrow text-center">Admin</p>
        <h2 className="font-display text-2xl font-bold mt-1 mb-6 text-center">
          Admin Login
        </h2>

        {msg && (
          <div className="mb-4 text-center text-sm bg-danger-light text-danger font-medium rounded-md py-2 px-3">
            {msg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Admin email"
            value={form.email}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Admin password"
            value={form.password}
            onChange={handleChange}
            className="input-field"
            required
          />
          <button type="submit" className="btn-primary w-full py-2.5">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
