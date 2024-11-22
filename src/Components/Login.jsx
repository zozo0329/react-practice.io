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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
