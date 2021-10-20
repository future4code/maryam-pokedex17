import React from "react"
import axios from "axios";
import styled from "styled-components";
import Router from "./routes/Router"
import GlobalStyle from "./global/GlobalStyles";
import GlobalState from "./global/GlobalState";


const App = () => {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  );
}

export default App;
