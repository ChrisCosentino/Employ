import React, { useState } from "react";
import Interview from "../interview.png";
import { scroller } from "react-scroll";

const Landing = () => {
  const [jobText, setJobText] = useState("");
  const [locationText, setLocationText] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "job") {
      setJobText(e.target.value);
    } else {
      setLocationText(e.target.value);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    scroller.scrollTo("jobs", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="landing-container">
      <h1 className="title">10,254 Jobs listed here</h1>
      <h3 className="subtitle">Your dream job is waiting</h3>

      <form className="form-container" onSubmit={handleForm}>
        <input
          onChange={handleChange}
          className="form-input"
          name="job"
          type="text"
          placeholder="Job title or keywords"
        />
        <input
          onChange={handleChange}
          className="form-input input-location"
          name="location"
          type="text"
          placeholder="City or ZIP code"
        />
        <button className="search-btn" type="submit">
          Find Job
        </button>
      </form>
      {/* <img src={Interview} className="landing-img" /> */}
    </div>
  );
};

export default Landing;
