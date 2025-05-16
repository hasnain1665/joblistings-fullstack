import React, { useState } from "react";
import { createJob } from "../api";

export default function JobForm({ onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    country: "",
    city: "",
    sector: "",
    experience: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createJob(formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} id="post" className="job-form">
      <input
        placeholder="Title"
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        placeholder="Company"
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
      />
      <input
        placeholder="Country"
        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
      />
      <input
        placeholder="City"
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      <input
        placeholder="Sector"
        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
      />
      <input
        placeholder="Experience"
        onChange={(e) =>
          setFormData({ ...formData, experience: e.target.value })
        }
      />
      <button type="submit">Post Job</button>
    </form>
  );
}
