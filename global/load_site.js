const axios = require('axios')
const cheerio = require('cheerio')
const axios_ = require('axios')

const loadMySite = async (url) => {
    const { data } = await axios_.get(url)
    // console.log(data)
    return cheerio.load(data)
}

module.exports = { loadMySite }