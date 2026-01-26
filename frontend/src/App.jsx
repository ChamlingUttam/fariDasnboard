import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profiles from "./pages/Profiles";
import Setting from "./pages/Setting";

import PageLayouts from "./layouts/PageLayouts";
import ProtectedLayouts from "./components/ProtectedLayouts";

import { useAuthStore } from "./stores/auth.store";

const App = () => {
  const { authUser } = useAuthStore();

  return (
    <>
      <Toaster position="top-center" />

      <Routes>
        {/* Public routes */}
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!authUser ? <Register /> : <Navigate to="/" />}
        />

        {/* Protected layout routes */}
        <Route
          element={
            <ProtectedLayouts>
              <PageLayouts />
            </ProtectedLayouts>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/settings" element={<Setting />} />
        </Route>

        {/* Catch-all */}
        <Route
          path="*"
          element={<Navigate to={authUser ? "/" : "/login"} />}
        />
      </Routes>
    </>
  );
};

export default App;
