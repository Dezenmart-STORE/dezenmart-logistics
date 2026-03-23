"use client";

import { useState } from "react";
import AuthLayout from "./AuthCard";
import Label from "../Label";
import SocialLogin from "../SocialLogin";
import styles from "../../styles";

interface LoginProps {
  onForgot?: () => void;
  onSignup?: () => void;
}

export default function Login({ onForgot, onSignup }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <div style={styles.form}>
      <h1 style={styles.heading}>Login</h1>
      <p style={styles.sub}>Login to access your Dezenmart account</p>

      <Label text="Email" />
      <input
        style={styles.input}
        className="input-field"
        placeholder="john.doe@gmail.com"
        type="email"
      />

      <Label text="Password" />
      <div style={{ position: "relative" }}>
        <input
          style={{ ...styles.input, paddingRight: 40 }}
          className="input-field"
          placeholder="••••••••"
          type={showPassword ? "text" : "password"}
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          style={styles.eyeBtn}
        >
          {showPassword ? "🙈" : "👁"}
        </button>
      </div>

      <div style={styles.row}>
        <label style={styles.checkRow}>
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            style={{ accentColor: "#ff2d2d" }}
          />
          <span style={styles.checkLabel}>Remember me</span>
        </label>
        <button
          className="link-btn"
          style={{ ...styles.linkSmall, color: "#ff2d2d" }}
          onClick={onForgot}
        >
          Forgot Password?
        </button>
      </div>

      <button style={styles.primaryBtn} className="auth-btn">
        Login
      </button>

      <p style={styles.switchText}>
        Don&apos;t have an account?{" "}
        <button
          className="link-btn"
          style={{ ...styles.linkSmall, color: "#ff2d2d", fontWeight: 600 }}
          onClick={onSignup}
        >
          Sign up
        </button>
      </p>

      <SocialLogin label="in" />
    </div>
  );
}
