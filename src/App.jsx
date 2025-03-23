import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import AddJob from "./Components/Jobs/Addjob";
import ServiceList from "./Components/Services/Addservice";
import Login from "./Pages/Login";
import Jobapplication from "./Pages/Jobapplication";
import TotalJobs from "./Pages/TotalJob";
import AdminJobs from "./Components/Jobs/AdminJob";
import ProtectedRoute from "./Middleware/ProtectionRoute";

const App = () => {
  return (
    <Router basename="/admin">  {/* ✅ Basename add kiya */}
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs"
          element={
            <ProtectedRoute>
              <AdminJobs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-job"
          element={
            <ProtectedRoute>
              <AddJob />
            </ProtectedRoute>
          }
        />
        <Route
          path="/services"
          element={
            <ProtectedRoute>
              <ServiceList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/job-applications"
          element={
            <ProtectedRoute>
              <Jobapplication />
            </ProtectedRoute>
          }
        />
        <Route
          path="/total-jobs"
          element={
            <ProtectedRoute>
              <TotalJobs />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
