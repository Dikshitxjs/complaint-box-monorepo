"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔗 BACKEND INTEGRATION LATER
    console.log({ name, email, password });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0C0F2D] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-[#14184A] rounded-2xl p-6 sm:p-8 shadow-xl"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
          Create Account
        </h1>
        <p className="text-gray-300 text-sm text-center mt-2">
          Join Complaint Box today
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#0C0F2D] text-white outline-none border border-gray-600 focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#0C0F2D] text-white outline-none border border-gray-600 focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#0C0F2D] text-white outline-none border border-gray-600 focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition text-white"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
