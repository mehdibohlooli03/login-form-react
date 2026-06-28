import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import "./../styles/auth-container.css";

export default function AuthContainer() {
  const [mode, setMode] = useState("signin");
  const toggleMode = () => setMode(mode === "signin" ? "signup" : "signin");

  const angleVariants = {
    signin: {
      clipPath: "polygon(100% 0, 100% 100%, 65% 100%, 30% 0)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    signup: {
      clipPath: "polygon(0% 0, 65% 0, 20% 100%, 0% 100%)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  /*
0% 0, 75% 0, 20% 100%, 0% 100%
*/
  const formVariants = {
    hidden: { opacity: 0, x: mode === "signin" ? -200 : 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.8, duration: 0.6 },
    },
    exit: { opacity: 0, x: mode === "signin" ? -200 : 200 },
  };

  return (
    <motion.div className={`auth-wrapper ${mode}`}>
      <div className="auth-card">
        <motion.div
          className="angle-layer"
          variants={angleVariants}
          animate={mode}
        />
        <AnimatePresence mode="wait">
          {mode === "signin" ? (
            <motion.div
              key="signin"
              className="auth-content"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="auth-left">
                <SignInForm toggleMode={toggleMode} />
              </div>
              <div className="auth-right">
                <h1>WELCOME BACK!</h1>
                <p>We are happy to have you with us again.</p>
                <p className="switch-text">
                  Don’t have an account?{" "}
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="switch-btn"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              className="auth-content"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="auth-left">
                <h1>WELCOME!</h1>
                <p>We’re delighted to have you here.</p>
                <p className="switch-text">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="switch-btn"
                  >
                    Sign In
                  </button>
                </p>
              </div>
              <div className="auth-right">
                <SignUpForm toggleMode={toggleMode} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
