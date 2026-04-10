"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main
      style={{
        background: "#F5F2ED",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "440px", padding: "0" }}>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "15px",
            fontWeight: 500,
            color: "#1a1a1a",
            margin: "0 0 4px 0",
          }}
        >
          QuickSale
        </h2>

        <h1
          style={{
            fontFamily: "Georgia, Times New Roman, serif",
            fontSize: "42px",
            fontWeight: 700,
            color: "#1a1a1a",
            margin: "0 0 48px 0",
            lineHeight: 1.1,
          }}
        >
          Create your account.
        </h1>

        <label
          style={{
            fontFamily: "sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            color: "#1a1a1a",
            display: "block",
            marginBottom: "8px",
          }}
        >
          Full name
        </label>
        <div style={{ position: "relative", marginBottom: "28px" }}>
          <span
            style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "16px",
            }}
          >
            👤
          </span>
          <input
            type="text"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "13px 14px 13px 42px",
              fontSize: "15px",
              border: "1.5px solid #ddd",
              borderRadius: "10px",
              background: "#fff",
              color: "#1a1a1a",
              outline: "none",
              fontFamily: "sans-serif",
            }}
          />
        </div>

        <label
          style={{
            fontFamily: "sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            color: "#1a1a1a",
            display: "block",
            marginBottom: "8px",
          }}
        >
          Email address
        </label>
        <div style={{ position: "relative", marginBottom: "28px" }}>
          <span
            style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "16px",
            }}
          >
            ✉️
          </span>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "13px 14px 13px 42px",
              fontSize: "15px",
              border: "1.5px solid #ddd",
              borderRadius: "10px",
              background: "#fff",
              color: "#1a1a1a",
              outline: "none",
              fontFamily: "sans-serif",
            }}
          />
        </div>

        <label
          style={{
            fontFamily: "sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            color: "#1a1a1a",
            display: "block",
            marginBottom: "8px",
          }}
        >
          Password
        </label>
        <div style={{ position: "relative", marginBottom: "28px" }}>
          <span
            style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "16px",
            }}
          >
            🔒
          </span>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "13px 42px 13px 42px",
              fontSize: "15px",
              border: "1.5px solid #bcd0f7",
              borderRadius: "10px",
              background: "#EEF4FF",
              color: "#1a1a1a",
              outline: "none",
              fontFamily: "sans-serif",
            }}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              fontSize: "16px",
              color: "#888",
            }}
          >
            {showPassword ? "🙈" : "👁"}
          </span>
        </div>

        <label
          style={{
            fontFamily: "sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            color: "#1a1a1a",
            display: "block",
            marginBottom: "8px",
          }}
        >
          Confirm password
        </label>
        <div style={{ position: "relative", marginBottom: "36px" }}>
          <span
            style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "16px",
            }}
          >
            🔒
          </span>
          <input
            type={showConfirm ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "13px 42px 13px 42px",
              fontSize: "15px",
              border: "1.5px solid #bcd0f7",
              borderRadius: "10px",
              background: "#EEF4FF",
              color: "#1a1a1a",
              outline: "none",
              fontFamily: "sans-serif",
            }}
          />
          <span
            onClick={() => setShowConfirm(!showConfirm)}
            style={{
              position: "absolute",
              right: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              fontSize: "16px",
              color: "#888",
            }}
          >
            {showConfirm ? "🙈" : "👁"}
          </span>
        </div>

        <button
          onClick={() => router.push("/login")}
          style={{
            width: "100%",
            padding: "15px",
            background: "#D94F2B",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            cursor: "pointer",
            marginBottom: "28px",
          }}
        >
          Create Account <span style={{ fontSize: "18px" }}>→</span>
        </button>

        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "14px",
            color: "#888",
            textAlign: "center",
            margin: 0,
          }}
        >
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            style={{
              color: "#1a1a1a",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Log in
          </span>
        </p>
      </div>
    </main>
  );
}