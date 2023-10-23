import { useEffect, useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import "react-toastify/dist/ReactToastify.css";
import GreetAndLogout from "./components/GreetAndLogout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (userEmail: string) => {
    setIsLoggedIn(true);
    setEmail(userEmail);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("email", userEmail);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <GreetAndLogout onLogout={handleLogout} email={email} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
