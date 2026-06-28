import "./../styles/form.css";

export default function SignUpForm() {
  return (
    <form className="auth-form">
      <h2>Create Account</h2>

      <label>
        Username
        <input type="text" placeholder="mahdi_creator" />
      </label>

      <label>
        Email
        <input type="email" placeholder="you@example.com" />
      </label>

      <label>
        Password
        <input type="password" placeholder="Choose a strong password" />
      </label>

      <button type="submit" className="primary-btn">
        Sign Up
      </button>

      
    </form>
  );
}
