import React, { Fragment } from "react";

const JobItem = ({ job }) => {
  return (
    <Fragment>
      <div className="job-container">
        <div className="job-title">{job.jobtitle}</div>
        <div className="job-company">{job.company}</div>
        <div className="job-city">{job.city}</div>
        <a
          className="apply-btn"
          href={job.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          Apply
        </a>
      </div>
    </Fragment>
  );
};

export default JobItem;
