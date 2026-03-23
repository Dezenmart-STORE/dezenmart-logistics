"use client";

import { useState } from "react";
import { Screen } from "../Types";
import Login from "./Login";
import Signup from "./SignUp";
import ForgotPassword from "./ForgetPassword";
import VerifyCode from "./VerifyCode";
import SetPassword from "./SetPassword";

export default function AuthFlow() {
  const [screen, setScreen] = useState<Screen>("login");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {screen === "login" && (
        <Login
          onForgot={() => setScreen("forgot")}
          onSignup={() => setScreen("signup")}
        />
      )}
      {screen === "signup" && <Signup onLogin={() => setScreen("login")} />}
      {screen === "forgot" && (
        <ForgotPassword
          onBack={() => setScreen("login")}
          onSubmit={() => setScreen("verify")}
        />
      )}
      {screen === "verify" && (
        <VerifyCode
          onBack={() => setScreen("forgot")}
          onSubmit={() => setScreen("set-password")}
        />
      )}
      {screen === "set-password" && (
        <SetPassword
          onBack={() => setScreen("verify")}
          onDone={() => setScreen("login")}
        />
      )}
    </div>
  );
}
