import React, { useEffect, useState } from "react";
import { fetchJobs, deleteJob } from "../api";
import "./JobList.css";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    country: [],
    city: [],
    sector: [],
    experience: [],
  });
  const [allFilters, setAllFilters] = useState({
    countries: [],
    cities: [],
    sectors: [],
    experiences: [],
  });
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(15);
  const [totalJobs, setTotalJobs] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadJobs();
  }, [currentPage, jobsPerPage]);

  const loadJobs = async () => {
    try {
      // Build query string for filters
      const queryParams = new URLSearchParams();

      if (filters.country.length > 0) {
        queryParams.append("country", filters.country.join(","));
      }
      if (filters.city.length > 0) {
        queryParams.append("city", filters.city.join(","));
      }
      if (filters.sector.length > 0) {
        queryParams.append("sector", filters.sector.join(","));
      }
      if (filters.experience.length > 0) {
        queryParams.append("experience", filters.experience.join(","));
      }
      if (searchTerm) {
        queryParams.append("title", searchTerm);
        queryParams.append("company", searchTerm);
      }

      const res = await fetchJobs(
        currentPage,
        jobsPerPage,
        queryParams.toString()
      );
      const jobsData = res.data.jobs;

      setJobs(jobsData);
      setTotalJobs(res.data.total);
      setTotalPages(res.data.pages);

      if (currentPage === 1) {
        const allRes = await fetchJobs(1, 1000);
        const allJobsData = allRes.data.jobs;

        setAllFilters({
          countries: [...new Set(allJobsData.map((j) => j.country))],
          cities: [...new Set(allJobsData.map((j) => j.city))],
          sectors: [...new Set(allJobsData.map((j) => j.sector))],
          experiences: [...new Set(allJobsData.map((j) => j.experience))],
        });
      }
    } catch (error) {
      console.error("Error loading jobs:", error);
    }
  };

  const handleCheckboxChange = (category, value) => {
    const updated = filters[category].includes(value)
      ? filters[category].filter((v) => v !== value)
      : [...filters[category], value];

    setFilters({ ...filters, [category]: updated });
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setFilters({
      country: [],
      city: [],
      sector: [],
      experience: [],
    });
    setSearchInput("");
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handleDelete = async (id) => {
    await deleteJob(id);
    loadJobs();
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchTerm(searchInput);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="job-page">
      <div className="hero-section">
        <h2>Find Your Next Opportunity</h2>
        <p>
          Search and post jobs easily. Whether you're hiring or job hunting,
          we've got you covered.
        </p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by job title or company..."
            value={searchInput}
            onChange={handleSearchInputChange}
            className="job-search-input"
          />
          <button onClick={handleSearchClick} className="search-btn">
            Search Jobs
          </button>
        </div>
      </div>

      <div className="job-layout">
        <div className="job-filters">
          <button className="reset-btn" onClick={handleResetFilters}>
            Clear All
          </button>

          <div className="filter-group">
            <h5>Country</h5>
            <div className="checkbox-row">
              {allFilters.countries.map((country) => (
                <label key={country}>
                  <input
                    type="checkbox"
                    checked={filters.country.includes(country)}
                    onChange={() => handleCheckboxChange("country", country)}
                  />
                  {country}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h5>City</h5>
            <div className="checkbox-row">
              {allFilters.cities.map((city) => (
                <label key={city}>
                  <input
                    type="checkbox"
                    checked={filters.city.includes(city)}
                    onChange={() => handleCheckboxChange("city", city)}
                  />
                  {city}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h5>Sector</h5>
            <div className="checkbox-row">
              {allFilters.sectors.map((sector) => (
                <label key={sector}>
                  <input
                    type="checkbox"
                    checked={filters.sector.includes(sector)}
                    onChange={() => handleCheckboxChange("sector", sector)}
                  />
                  {sector}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h5>Experience</h5>
            <div className="checkbox-row">
              {allFilters.experiences.map((exp) => (
                <label key={exp}>
                  <input
                    type="checkbox"
                    checked={filters.experience.includes(exp)}
                    onChange={() => handleCheckboxChange("experience", exp)}
                  />
                  {exp}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="job-cards-container">
          <div className="job-cards">
            {jobs.map((job) => (
              <div className="job-card" key={job.id}>
                <div className="job-left">
                  <div className="job-info">
                    <h3 className="job-title">{job.title}</h3>
                    <p className="company-name">{job.company}</p>
                    <div className="location-tags">
                      <span className="tag">{job.country}</span>
                      <span className="tag">{job.city}</span>
                    </div>
                  </div>
                </div>

                <div className="job-right">
                  <div className="job-tags">
                    <span className="tag">{job.sector}</span>
                    <span className="tag">{job.experience}</span>
                  </div>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="delete-btn"
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
