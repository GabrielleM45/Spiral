import React from "react";
import { HashRouter } from 'react-router-dom';
import MainRouter from "./routes/MainRouter";
import "./App.css"

const App = () => {
  return (
  <HashRouter basename = "/">
    <MainRouter />
  </HashRouter>
  )
}
export default App;
