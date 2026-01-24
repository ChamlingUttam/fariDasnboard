import React from "react";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <>

      <Toaster position="top-center" reverseOrder={false} />


      <Register />
      <Login/>
    </>
  );
};

export default App;
