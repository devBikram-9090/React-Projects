import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import LogoutBtn from "./components/LogoutBtn";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("false");
  const [username, setUsername] = useState(" ");

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const HandleLogout = () => {
    setIsLoggedIn(false);
    setUsername(" ");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1 className="text-white">Welcome {username}</h1>
          <LogoutBtn onLogout={HandleLogout} />
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
