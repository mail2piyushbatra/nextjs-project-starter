"use client";

import React, { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<"admin" | "teacher" | "student">("student");
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background text-foreground">
        <AppSidebar role={role} />
        <div className="flex-1 flex flex-col">
          <header className="flex justify-between items-center p-4 border-b bg-card">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="font-bold text-2xl">A2 - Aspiring Aces</h1>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as "admin" | "teacher" | "student")}
                className="px-3 py-2 border rounded-md bg-background text-foreground"
              >
                <option value="admin">Admin</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </select>
              <button
                onClick={toggleDarkMode}
                className="px-3 py-2 border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {isDark ? "Light" : "Dark"}
              </button>
            </div>
          </header>
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
