import React from "react";

import { Header, WhatGPT3 } from "./containers";
import { Navbar, Brand } from "./components";

import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
  </div>
);

export default App;
