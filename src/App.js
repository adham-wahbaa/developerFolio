import React from "react";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  console.log("GitHub Token (env):", process.env.REACT_APP_GITHUB_TOKEN);

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
