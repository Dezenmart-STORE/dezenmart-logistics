"use client";

import { useState } from "react";
import AuthLayout from "./AuthLayout";
import Label from "../Label";
import styles from "../../styles";

interface VerifyCodeScreenProps {
  onBack?: () => void;
  onSubmit?: () => void;
}

export default function VerifyCodeScreen({
  onBack,
  onSubmit,
}: VerifyCodeScreenProps) {
  const [code, setCode] = useState("");

  return (
    <AuthLayout screen="verify">
      <div style={styles.form}>
        <button className="link-btn" style={styles.backBtn} onClick={onBack}>
          ← Back to login
        </button>

        <h1 style={{ ...styles.heading, marginTop: 10 }}>Verify code</h1>
        <p style={styles.sub}>An activation code has been sent to your email</p>

        <Label text="Enter Code" />
        <input
          style={{
            ...styles.input,
            fontSize: 22,
            letterSpacing: "0.35em",
            fontFamily: "'Syne', sans-serif",
          }}
          className="input-field otp-input"
          placeholder="T280MX"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          maxLength={8}
        />

        <p style={{ fontSize: 12, color: "#888", marginBottom: 18 }}>
          Didn&apos;t receive a code?{" "}
          <span style={{ color: "#ff2d2d", cursor: "pointer" }}>Resend</span>
        </p>

        <button
          style={styles.primaryBtn}
          className="auth-btn"
          onClick={onSubmit}
        >
          Verify
        </button>
      </div>
    </AuthLayout>
  );
}
