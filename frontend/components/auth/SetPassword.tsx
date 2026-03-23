"use client";

import AuthLayout from "./AuthLayout";
import Label from "../Label";
import styles from "../../styles";

interface SetPasswordScreenProps {
  onBack?: () => void;
  onDone?: () => void;
}

export default function SetPasswordScreen({
  onBack,
  onDone,
}: SetPasswordScreenProps) {
  return (
    <AuthLayout screen="set-password">
      <div style={styles.form}>
        <button className="link-btn" style={styles.backBtn} onClick={onBack}>
          ← Back to login
        </button>

        <h1 style={{ ...styles.heading, marginTop: 10 }}>Set a password</h1>
        <p style={styles.sub}>
          Your previous password has been reset. Please set a new password for
          your account
        </p>

        <Label text="Create Password" />
        <input
          style={styles.input}
          className="input-field"
          placeholder="••••••••••••"
          type="password"
        />

        <Label text="Re-enter Password" />
        <input
          style={styles.input}
          className="input-field"
          placeholder="••••••••••••"
          type="password"
        />

        <button
          style={{ ...styles.primaryBtn, marginTop: 20 }}
          className="auth-btn"
          onClick={onDone}
        >
          Set password
        </button>
      </div>
    </AuthLayout>
  );
}
