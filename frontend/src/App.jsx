import React from "react";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";

const App = () => {
  return (
    <>

      <Toaster position="top-center" reverseOrder={false} />


      <Register />
    </>
  );
};

export default App;
