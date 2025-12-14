"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Notebook from "@/views/Notebook";
import Auth from "@/views/Auth";

export default function NotebookIdPage() {
  return (
    <ProtectedRoute fallback={<Auth />}>
      <Notebook />
    </ProtectedRoute>
  );
}
