"use client";

import AuthLayout from "./AuthLayout";
import Label from "../Label";
import SocialLogin from "../SocialLogin";
import styles from "../../styles";

interface ForgotPasswordScreenProps {
  onBack?: () => void;
  onSubmit?: () => void;
}

export default function ForgotPasswordScreen({
  onBack,
  onSubmit,
}: ForgotPasswordScreenProps) {
  return (
    <AuthLayout screen="forgot">
      <div style={styles.form}>
        <button className="link-btn" style={styles.backBtn} onClick={onBack}>
          ← Back to login
        </button>

        <h1 style={{ ...styles.heading, marginTop: 10 }}>
          Forgot your password?
        </h1>
        <p style={styles.sub}>
          Don&apos;t worry, happens to all of us. Enter your email below to
          recover your password
        </p>

        <Label text="Email" />
        <input
          style={styles.input}
          className="input-field"
          placeholder="john.doe@gmail.com"
          type="email"
        />

        <button
          style={{ ...styles.primaryBtn, marginTop: 20 }}
          className="auth-btn"
          onClick={onSubmit}
        >
          Submit
        </button>

        <SocialLogin label="in" />
      </div>
    </AuthLayout>
  );
}
