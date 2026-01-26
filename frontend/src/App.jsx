import React from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useAuthStore } from "./stores/auth.store";


const App = () => {
  const {authUser} = useAuthStore()
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/" element={authUser?<Home />:<Navigate to={'/login'}/>} />
        <Route path="/register" element={!authUser?<Register/> : <Navigate to={'/'} />}/>
        <Route path="/login" element={!authUser?<Login/>:<Navigate to={'/'} /> }   />
      </Routes>
    </>
  );
};

export default App;
