import React from "react";
import { Application, Form, Login } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/application" element={<Application />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
