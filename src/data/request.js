
const fs = require('fs')
const rp = require('request-promise')

const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    start: 1,
    limit: 5000,
    convert: 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': 'cc1ea457-92c8-4407-94ab-c2f0c99c467c'
  },
  json: true,
  gzip: true
}
rp(requestOptions).then(response => {
  let data = JSON.stringify(response, null, 2)
  fs.writeFile('data.json', data, (err) => {
    if (err) throw err

    console.log('Data written to file')
  })
}).catch((err) => {
  console.log('API call error:', err.message)
})
