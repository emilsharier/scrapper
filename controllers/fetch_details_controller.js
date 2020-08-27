const axios = require('axios')
const cheerio = require('cheerio')

const constants = require('../constants/constant')

const fetchDetails = async (req, res) => {
    try {
        const search_query = req.body.search_query
        const { data } = await axios.get(constants.base_url + search_query)
        const $ = cheerio.load(data)
        let results = []
        let map = {}
        $('.res_br').each((index, elm) => {
            let univ_name = $('.rs_cnt .univ_tit a', elm).text()
            let course = $('.shrt_pg .crs_tit a', elm).text()
            let course_url = $('.shrt_pg .bnts_wp a', elm).attr('href')
            
            map.university = univ_name
            map.course = course
            map.course_url = course_url

            results.push(map)
        })

        return res.json({ data: results })
    } catch (ex) {
        console.log(ex)
        throw ex
    }
}

module.exports = { fetchDetails }