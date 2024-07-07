import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username !== " " && password !== " ") {
      onLogin(username);
    }
  };
  return (
    <div>
      <h2>Login Form</h2>
      <input
        className="text-black"
        type="email"
        placeholder="Enter Your Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      Email
      <br />
      <input
        className="text-black"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      Password
      <br />
      <button onClick={handleLogin} className="bg-red-700 px-4 py-2">
        Login
      </button>
    </div>
  );
};

export default LoginForm;
