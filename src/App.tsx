import React from "react";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import StudentInfo from "./pages/student-info/StudentInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="md:p-10 bg-[#edf2fb] h-full">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/student-info/:id" element={<StudentInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
