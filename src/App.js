import "./App.css";
import { useState } from "react";
import RestrictedPage from "./components/RestrictedPage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = "Igor";
  function login() {
    setIsLoggedIn(true);
  }
  function logout() {
    setIsLoggedIn(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage
          isLoggedIn={isLoggedIn}
          user={user}
          Login={login}
          Logout={logout}
        ></RestrictedPage>
      </header>
    </div>
  );
}

export default App;
