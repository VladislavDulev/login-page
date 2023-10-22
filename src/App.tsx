import { useEffect, useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import ActionButton from "./components/common/ActionButton";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

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

  useEffect(() => {
    console.log("tuka");

    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const greetingUser = `Hi, ${email}`;

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <p style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 22 }}>
            {greetingUser}
          </p>
          <ActionButton label="Logout" onClick={handleLogout} />
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
