import { useState } from "react";
import "./App.css";
import WelcomePage from "./components/WelcomePage";
import GetUserComponent from "./components/GetUserComponent";

function App() {
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? (
        <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn}></WelcomePage>
      ) : (
        <GetUserComponent
          setUser={setUser}
          setIsLoggedIn={setIsLoggedIn}
        ></GetUserComponent>
      )}
    </div>
  );
}

export default App;
