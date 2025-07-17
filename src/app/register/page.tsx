"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setLoading(false);
    if (res.ok) {
      setMessage("Registration successful! You can now log in.");
      setForm({ username: "", email: "", password: "" });
    } else {
      setError(data.error || "Registration failed");
    }
  }

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200 min-h-[100dvh]">
      <div className="bg-white/90 p-10 rounded-2xl w-full max-w-md flex flex-col items-center">
        <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12A4 4 0 1 1 8 12a4 4 0 0 1 8 0ZM12 14c-4.418 0-8 2.239-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.761-3.582-5-8-5Z" /></svg>
        </div>
        <h2 className="text-3xl font-extrabold mb-2 text-indigo-700">Create your account</h2>
        <p className="text-gray-500 mb-6 text-sm">Sign up to get started!</p>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={form.username}
              onChange={e => setForm(f => ({ ...f, username: e.target.value }))}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-gray-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-gray-50"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={form.password}
              onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-gray-50"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        {message && <p className="mt-4 text-green-600 text-sm">{message}</p>}
        {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}
        <p className="mt-6 text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-600 hover:underline font-medium">Login</a>
        </p>
      </div>
    </div>
  );
} 