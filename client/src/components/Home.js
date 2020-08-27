import React, { Fragment } from "react";
import Landing from "./Landing";
import Jobs from "./postings/Jobs";

const Home = () => {
  return (
    <Fragment>
      <Landing />
      <Jobs />
    </Fragment>
  );
};

export default Home;
