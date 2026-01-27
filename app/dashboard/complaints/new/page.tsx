"use client";

import { useState } from "react";

export default function NewComplaintPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      title,
      description,
      anonymous,
    });

    alert("Complaint submitted (fake)");
  };

  return (
    <div className="min-h-screen bg-[#0C0F2D] text-white p-6">
      <h1 className="text-2xl font-bold mb-6">New Complaint</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input
          type="text"
          placeholder="Complaint title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded bg-[#14184A] outline-none"
        />

        <textarea
          placeholder="Describe your issue"
          required
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 rounded bg-[#14184A] outline-none"
        />

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={anonymous}
            onChange={() => setAnonymous(!anonymous)}
          />
          Post anonymously
        </label>

        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
}
