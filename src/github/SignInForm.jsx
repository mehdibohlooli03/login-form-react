import "./../styles/form.css";

export default function SignInForm() {
  return (
    <form className="auth-form">
      <h2>Sign In</h2>
      <label>
        Email
        <input type="email" placeholder="you@example.com" />
      </label>
      <label>
        Password
        <input type="password" placeholder="••••••••" />
      </label>

      <button type="submit" className="primary-btn">
        Login
      </button>

      
    </form>
  );
}
