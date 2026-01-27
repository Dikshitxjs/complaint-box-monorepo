"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const complaints = [
  {
    id: "1",
    title: "Road damage near my area",
    status: "Pending",
  },
  {
    id: "2",
    title: "Street light not working",
    status: "Resolved",
  },
];

export default function DashboardPage() {
  return (
    <section className="min-h-screen bg-[#0C0F2D] text-white px-5 py-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">User Dashboard</h1>
            <p className="text-gray-300 mt-1">
              Welcome back! Manage your complaints here.
            </p>
          </div>

          <Link
            href="/dashboard/complaints/new"
            className="px-5 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
          >
            + New Complaint
          </Link>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <StatCard title="Total Complaints" value="12" />
          <StatCard title="Pending" value="4" />
          <StatCard title="Resolved" value="8" />
        </div>

        {/* RECENT COMPLAINTS */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">
            Recent Complaints
          </h2>

          <div className="space-y-3">
            {complaints.map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#14184A] p-4 rounded-xl flex justify-between items-center"
              >
                <div>
                  <h3 className="font-medium">{c.title}</h3>
                  <p
                    className={`text-sm mt-1 ${
                      c.status === "Resolved"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {c.status}
                  </p>
                </div>

                <Link
                  href={`/dashboard/complaints/${c.id}`}
                  className="text-blue-400 hover:underline text-sm"
                >
                  View
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-[#14184A] rounded-xl p-5">
      <p className="text-gray-300 text-sm">{title}</p>
      <h3 className="text-3xl font-bold mt-1">{value}</h3>
    </div>
  );
}
