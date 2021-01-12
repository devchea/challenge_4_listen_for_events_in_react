import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [password, setPassword] = useState([]);

  const handleChange = (e) => {
    setPassword(e);
  };

  useEffect(() => {
    if (password === "open sesame") {
      alert("You may enter");
      setPassword("");
    }
  }, [password]);

  return (
    <div className="App">
      <h2>What's the secret phrase?</h2>

      <input
        type="text"
        placeholder="Super duper secret"
        onChange={(e) => handleChange(e.target.value)}
      />

      <p>
        Hint: It's <strong>open sesame</strong>
      </p>

      <ScotchInfoBar seriesNumber={4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
