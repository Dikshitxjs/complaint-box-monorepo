"use client";

import { useParams } from "next/navigation";

export default function ComplaintDetailPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#0C0F2D] text-white p-6">
      <h1 className="text-2xl font-bold">Complaint #{id}</h1>

      <div className="bg-[#14184A] p-6 rounded-xl mt-6 max-w-xl">
        <h2 className="font-semibold mb-2">Road damage issue</h2>
        <p className="text-gray-300">
          There are potholes causing traffic problems.
        </p>

        <p className="mt-4 text-sm text-yellow-400">
          Status: Pending
        </p>

        <div className="mt-4 p-4 bg-[#0C0F2D] rounded-lg">
          <p className="text-sm text-gray-300">
            Admin Response: Not yet responded
          </p>
        </div>
      </div>
    </div>
  );
}
