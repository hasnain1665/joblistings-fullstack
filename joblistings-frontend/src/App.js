import React, { useState } from "react";
import Navbar from "./components/Navbar";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [showJobForm, setShowJobForm] = useState(false);

  const handlePostJobClick = () => {
    setShowJobForm(true);
  };
  const handleJobFormClose = () => {
    setShowJobForm(false);
  };

  return (
    <div className="container">
      <Navbar onPostJobClick={handlePostJobClick} />
      {showJobForm ? <JobForm onClose={handleJobFormClose} /> : <JobList />}
      <Footer />
    </div>
  );
}

export default App;
