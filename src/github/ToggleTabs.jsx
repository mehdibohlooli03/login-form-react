// src/components/ToggleTabs.jsx
import "./../styles/form.css";

export default function ToggleTabs({ mode, setMode }) {
  return (
    <div className="tabs">
      <button
        className={mode === "signin" ? "tab active" : "tab"}
        onClick={() => setMode("signin")}
      >
        Sign In
      </button>
      <button
        className={mode === "signup" ? "tab active" : "tab"}
        onClick={() => setMode("signup")}
      >
        Sign Up
      </button>
    </div>
  );
}
