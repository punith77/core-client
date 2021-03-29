import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/navbar";
import "antd/dist/antd.css";
import "./scss/main.scss";

import { connect } from "react-redux";
const { get } = require("immutable");

function App() {
  const state = useSelector((state) => state);
  const isDarkTheme = get(state.globalState, "darkTheme");

  const selectedTheme = isDarkTheme ? "dark-theme" : "light-theme";
  console.log(selectedTheme);
  return (
    <div className={selectedTheme} style={{ height: "100vh" }}>
      <Navbar />
    </div>
  );
}
export default App;
