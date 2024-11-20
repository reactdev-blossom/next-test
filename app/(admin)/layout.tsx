// app/dashboard/layout.tsx
import React from "react";
import Link from "next/link";

export default function DashboardLayout({
  children,

}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout flex min-h-screen w-full bg-[#0C3227] p">
      {/* Sidebar */}
      <aside className="sidebar w-52 text-white ps-10 pt-10">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/settings">Settings</Link>
          <Link href="/reports">Reports</Link>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="content flex-1 ps-3  h-screen overflow-hidden">
        <div className="flex flex-col w-full h-full bg-white rounded-xl shadow-2xl overflow-auto">
          {/* Header */}
          <header className="header bg-gray-100 p-4">
            <h1 className="text-2xl font-semibold">User Control Panel</h1>
          </header>

          {/* Main content slot */}
          <main className="main-content bg-white shadow-md p-4 rounded-md">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
