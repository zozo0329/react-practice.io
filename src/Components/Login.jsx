import "./Login.css";
const Login = () => {
  return (
    <div className="login-container">
      <h1>Please Login</h1>
      <form>
        <input
          type="text"
          minLength={10}
          maxLength={17}
          required
          placeholder="Username"
        />
        <input
          type="password"
          minLength={7}
          maxLength={17}
          required
          placeholder="Password"
        />
        <div className="button-section">
          <button type="submit">Login</button>
          <a href="/#">Forgon Password?</a>
        </div>
      </form>
    </div>
  );
};
export default Login;
