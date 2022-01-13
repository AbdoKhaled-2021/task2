const request = require('request')
const getNews = (callback) => {
    var url = 'https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'from=2022-01-13&' +
        'sortBy=popularity&' +
        'apiKey=b8b183fdb34d427dbc1a0acbb5cd344b';
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,
                response.body.articles
            )
        }
    })
}
module.exports = getNews