import React, { useEffect, useState } from "react";
import axios from "axios";
import JobItem from "./JobItem";

const Jobs = () => {
  // Observe global state var and map jobitems to the state var

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await axios.get("./jobs.json");

      console.log(res.data.results);
      setResults(res.data.results);
    })();
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    // <div>
    //   <JobItem />
    // </div>
    <div className="jobs-container">
      <h1 className="title">Jobs</h1>
      <div className="heading-container">
        <div className="heading-title">Title</div>
        <div className="heading-company">Company</div>
        <div className="heading-city">City</div>
        <div className="heading-apply">Apply</div>
      </div>
      {results.map((job, i) => (
        <JobItem key={i} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
