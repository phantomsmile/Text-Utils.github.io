import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TestForm from "./Components/TestForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Light Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const switchTheme = (theme) => {
    document.body.style.background = `linear-gradient(${theme},transparent)`;
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Dark Mode");
      document.body.style.backgroundColor = "#002356";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      setModeText("Light Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="textUtils"
          aboutText="About textUtils"
          mode={mode}
          toggleMode={toggleMode}
          modeText={modeText}
          switchTheme={switchTheme}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* Without using exact keyword, react matches only partially */}
            <Route
              exact path="/"
              element={
                <TestForm
                  heading="Enter your Text to Analysis"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
