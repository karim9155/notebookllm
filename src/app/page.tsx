"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Dashboard from "@/views/Dashboard";
import Auth from "@/views/Auth";

export default function DashboardPage() {
  return (
    <ProtectedRoute fallback={<Auth />}>
      <Dashboard />
    </ProtectedRoute>
  );
}
