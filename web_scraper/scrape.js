const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const writeStream = fs.createWriteStream('drugs.csv')

const targetURL = 'https://clincalc.com/DrugStats/Top200Drugs.aspx'

// write headers
writeStream.write(`Drug Name \n`)

request(targetURL, (err, res, html) => {
	if(!err & res.statusCode == 200) {
		const $ = cheerio.load(html)
		$('a', '#tableTopDrugs').contents().each((i, elem) => {
			drugName = $(elem).text()
			
			// write row to csv
			writeStream.write(`${drugName} \n`)
		})
		console.log('scraping done')
	}
})