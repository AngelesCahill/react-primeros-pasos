import React from "react";
import logo from "./codigoPink.png";
import "./App.css";

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Logo" />
        <p>{!data ? "Loding..." : data}</p>
      </header>
    </div>
  );
}

export default App;
