"use client";

import Link from "next/link";

const complaints = [
  { id: "1", title: "Road damage", status: "Pending" },
  { id: "2", title: "Water issue", status: "Resolved" },
];

export default function ComplaintsPage() {
  return (
    <div className="min-h-screen bg-[#0C0F2D] text-white p-6">
      <h1 className="text-2xl font-bold mb-6">My Complaints</h1>

      <div className="space-y-4">
        {complaints.map((c) => (
          <div
            key={c.id}
            className="bg-[#14184A] p-4 rounded-xl flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-gray-300">{c.status}</p>
            </div>

            <Link
              href={`/dashboard/complaints/${c.id}`}
              className="text-blue-400 hover:underline"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
