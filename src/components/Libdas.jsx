import React from "react";

const StudentManagement = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-2">Student Management</h1>
      <p className="mb-8 text-gray-600">
        Efficiently manage student profiles, track borrowing history, and handle fee payments in one place.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {/* Student Directory */}
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Student Directory</h2>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">250 Students</span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Manage student profiles, academic details, and library access privileges all in one place.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            View All Students →
          </a>
        </div>

        {/* Fee Management */}
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Fee Management</h2>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Track overdue fees, process payments, and generate receipts for library services.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Manage Fees →
          </a>
        </div>

        {/* Borrowing Activity */}
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Borrowing Activity</h2>
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Real-time</span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            View student borrowing history, current checkouts, and manage book returns.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Track Activity →
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent Students */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Students</h3>
          <ul>
            {[
              { name: "Alex Johnson", dept: "Computer Science", id: "STU-10025", status: "Active", books: "3 / 5" },
              { name: "Maya Rodriguez", dept: "Literature", id: "STU-10032", status: "Active", books: "2 / 5" },
              { name: "David Chen", dept: "Chemistry", id: "STU-10045", status: "Hold", books: "0 / 5" },
            ].map((student, i) => (
              <li key={i} className="flex justify-between items-center py-3 border-b last:border-none">
                <div>
                  <p className="font-medium">{student.name}</p>
                  <p className="text-sm text-gray-500">{student.dept}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">{student.id}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {student.status}
                  </span>
                  <p className="text-sm mt-1 text-gray-700">{student.books}</p>
                </div>
              </li>
            ))}
          </ul>
          <a href="#" className="block text-blue-600 font-medium mt-4 hover:underline">
            View All Students
          </a>
        </div>

        {/* Student Portal Access */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e8f65d1514c?auto=format&fit=crop&w=800&q=60"
            alt="Student Portal"
            className="h-40 w-full object-cover"
          />
          <div className="p-5">
            <h3 className="text-lg font-semibold mb-2">Student Portal Access</h3>
            <p className="text-sm text-gray-500 mb-4">Secure login for students to manage their library services</p>
            <ul className="space-y-2 text-sm text-gray-700 mb-5">
              <li>✓ Personal borrowing dashboard</li>
              <li>✓ Digital library card access</li>
              <li>✓ Fine payment and history tracking</li>
              <li>✓ Book reservation and renewal tools</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full">
              Access Student Portal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;
