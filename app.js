// npm init -y
// npm i express
// npm i nodemon -g
// nodemon src/app.js
const express = require('express')


const app = express()
const port = process.env.PORT || 5000

const path = require('path')
    // path where app.js (main file) exist
console.log(__dirname)
    // path A / path B --> Path C
    // D:\nti\node\express-app\src, ../ --> D:\nti\node\express-app\
console.log(path.join(__dirname, '../'))
console.log(path.join(__dirname, '../public'))

const publicDirectory = path.join(__dirname, '../public')
    // const x = 'public'
app.use(express.static(publicDirectory))

app.set('view engine', 'hbs');

const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)

const hbs = require('hbs')

const getnews = require('./tools/getNews')

app.get('/', (req, res) => {


    getnews((error, data) => {
        if (error) {
            return res.send({ error })
        }
        res.render('index', {
            news: data,
        })
    })


})




// nodemon src/app.js -e js,hbs



app.listen(port, () => {
    console.log('Listening on port 5000')
})