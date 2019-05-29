import React from "react";
import { FormUser } from "./components/FormUser";
import "./App.css";
import { flattenProp } from "recompose";

function App() {
  return (
    <FormUser
      style={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center"
      }}
    />
  );
}

export default App;
