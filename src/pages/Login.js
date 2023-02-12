import "../styles/Login.css";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
// import Password from "./ShowAndHidePassword";
// import ShowAndHidePassword from "./ShowAndHidePassword";

// export default function Password() {
//   const [passwordShown, setPasswordShown] = useState(false);
//   // Password toggle handler
//   const togglePassword = () => {
//     // When the handler is invoked
//     // inverse the boolean state of passwordShown
//     setPasswordShown(!passwordShown);
//   };

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isLoading } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="login-page">
      <form className="login" onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <label className="label">Email:</label>
        <input
          className="input"
          placeholder="Username"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label className="label">Password:</label>
        <div className="inputi">
          <input
            className="input"
            placeholder="Password"
            type={passwordShown ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="showhidepass" onClick={togglePassword}></button>
          
          {/* <Password /> */}
        </div>
        <button disabled={isLoading}>Log in</button>
        {error && <div className="error">{error}</div>}
      </form>
      {/* <ShowAndHidePassword /> */}
      {/* <input type={passwordShown ? "text" : "password"} /> */}
    </div>
  );
};

export default Login;
