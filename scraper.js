const axios = require("axios").default;
const cheerio = require("cheerio");

const fetchHtml = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const scrapeIndeed = () => {
    const indeedUrl = ``;

    const html = await fetchHtml(indeedUrl);
    const selector = cheerio.load(html);

    
        
}

const extractTitle = selector => {
    const title = selector.find()
}