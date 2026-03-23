"use client";

import Login from "@/components/auth/Login";
import AuthCard from "@/components/auth/AuthCard";

export default function AuthPage() {
  return (
    <AuthCard screen="login">
      <Login />
    </AuthCard>
  );
}
