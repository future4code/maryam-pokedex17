import React from "react"
import axios from "axios";
import styled from "styled-components";
import Router from "./routes/Router"
import GlobalStyle from "./global";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
