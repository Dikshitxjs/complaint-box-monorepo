"use client";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#0C0F2D] text-white p-6">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      <div className="bg-[#14184A] p-6 rounded-xl max-w-md">
        <p><strong>Name:</strong> User</p>
        <p className="mt-2"><strong>Email:</strong> user@gmail.com</p>
        <p className="mt-2"><strong>Role:</strong> User</p>

        <button className="mt-6 px-5 py-2 bg-red-500 rounded-lg">
          Logout (fake)
        </button>
      </div>
    </div>
  );
}
