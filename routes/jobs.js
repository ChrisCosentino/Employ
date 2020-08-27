const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");

const fetchHtml = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const extractTitle = (selector) => {
  const title = selector.find(".jobtitle");
  console.log(title);
};

// @route    GET api/jobs
// @desc     Get jobs from indeed
// @access   Public
router.get("/", async (req, res) => {
  const indeedUrl = `https://ca.indeed.com/jobs?q=software&l=Toronto,%20ON&radius=15`;
  const html = await fetchHtml(indeedUrl);
  const $ = cheerio.load(html);

  extractTitle(selector);

  //   console.log(html);
  //   console.log(selector);
});

module.exports = router;
