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
        <nav style={{ padding: "10px", backgroundColor: "#333" }}>
          <Link to="/" style={{ color: "white", marginRight: 15 }}>Home</Link>
          <Link to="/shopping-list" style={{ color: "white", marginRight: 15 }}>Shopping List</Link>
          <Link to="/ag-grid" style={{ color: "white", marginRight: 15 }}>AG Grid</Link>
          <Link to="/datepicker" style={{ color: "white", marginRight: 15 }}>Date Picker</Link>
          <Link to="/lab10" style={{ color: "white", marginRight: 15 }}>Lab 10</Link>
          <Link to="/lab11" style={{ color: "white" }}>Lab 11</Link>
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
