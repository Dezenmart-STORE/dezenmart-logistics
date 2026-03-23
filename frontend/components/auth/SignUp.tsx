"use client";

import { useState } from "react";
import AuthLayout from "./AuthCard";
import Label from "../Label";
import SocialLogin from "../SocialLogin";
import styles from "../../styles";

interface SignUpProps {
  onLogin?: () => void;
}

export default function SignUp({ onLogin }: SignUpProps) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div style={styles.form}>
      <h1 style={styles.heading}>Sign up</h1>
      <p style={styles.sub}>
        Let&apos;s get you all set up so you can access your personal account
      </p>

      <div style={styles.grid2}>
        <div>
          <Label text="First Name" />
          <input
            style={styles.input}
            className="input-field"
            placeholder="John"
          />
        </div>
        <div>
          <Label text="Last Name" />
          <input
            style={styles.input}
            className="input-field"
            placeholder="Doe"
          />
        </div>
      </div>

      <div style={styles.grid2}>
        <div>
          <Label text="Email" />
          <input
            style={styles.input}
            className="input-field"
            placeholder="john.doe@gmail.com"
            type="email"
          />
        </div>
        <div>
          <Label text="Phone Number" />
          <input
            style={styles.input}
            className="input-field"
            placeholder="+234 000 0000"
            type="tel"
          />
        </div>
      </div>

      <Label text="Password" />
      <input
        style={styles.input}
        className="input-field"
        placeholder="••••••••"
        type="password"
      />

      <Label text="Confirm Password" />
      <input
        style={styles.input}
        className="input-field"
        placeholder="••••••••"
        type="password"
      />

      <label style={{ ...styles.checkRow, marginBottom: 14 }}>
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          style={{ accentColor: "#ff2d2d" }}
        />
        <span style={{ ...styles.checkLabel, fontSize: 12 }}>
          I agree to all the <span style={{ color: "#ff2d2d" }}>Terms</span> and{" "}
          <span style={{ color: "#ff2d2d" }}>Privacy Policies</span>
        </span>
      </label>

      <button style={styles.primaryBtn} className="auth-btn">
        Create account
      </button>

      <p style={styles.switchText}>
        Already have an account?{" "}
        <button
          className="link-btn"
          style={{ ...styles.linkSmall, color: "#ff2d2d", fontWeight: 600 }}
          onClick={onLogin}
        >
          Login
        </button>
      </p>

      <SocialLogin label="up" />
    </div>
  );
}
