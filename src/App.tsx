import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Home from "./pages/Home";
import ShoppingList from "./components/ShoppingList";
import AgGridCities from "./components/AgGridCities";
import MyDatePicker from "./components/MyDatePicker";
import Lab10 from "./lab10/Lab10";
import Lab11 from "./lab11/Lab11";

import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <nav
  style={{
    padding: "12px",
    backgroundColor: "#f7a8c9",
    display: "flex",
    gap: "20px",
    boxShadow: "0 2px 8px rgba(247,168,201,0.4)",
  }}
>
  <Link style={{ color: "white", fontWeight: "bold" }} to="/">Home</Link>
  <Link style={{ color: "white", fontWeight: "bold" }} to="/shopping-list">Shopping List</Link>
  <Link style={{ color: "white", fontWeight: "bold" }} to="/ag-grid">AG Grid</Link>
  <Link style={{ color: "white", fontWeight: "bold" }} to="/datepicker">Date Picker</Link>
  <Link style={{ color: "white", fontWeight: "bold" }} to="/lab10">Lab 10</Link>
  <Link style={{ color: "white", fontWeight: "bold" }} to="/lab11">Lab 11</Link>
</nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/ag-grid" element={<AgGridCities />} />
          <Route path="/datepicker" element={<MyDatePicker />} />

          <Route
            path="/lab10"
            element={
              <ProtectedRoute>
                <Lab10 />
              </ProtectedRoute>
            }
          />

          <Route
            path="/lab11"
            element={
              <ProtectedRoute>
                <Lab11 />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
