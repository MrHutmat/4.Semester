import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Register from "./components/Register";
const App = () => {
  return (
    <>
      <NavBar />
      <div>
        <Home />
        <Register />
        <Login />
        <Login />
      </div>
    </>
  );
};

export default App;
