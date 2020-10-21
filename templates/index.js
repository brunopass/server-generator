module.exports = index = () => {
    return `const express = require('express')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const config = require('./config')
const GET = require('./controllers/GET')
const POST = require('./controllers/POST')
const PATCH = require('./controllers/PATCH')
const DELETE = require('./controllers/DELETE')

const app = express()

app.use(cors({
    origin: [config.ORIGIN],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
}))

app.use(morgan('common'))
app.use(helmet())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(GET)
app.use(POST)
app.use(PATCH)
app.use(DELETE)

const connection = app.listen(config.PORT, ()=> {
    console.log('running on http://localhost:3001')
})

connection.on('connection', connection => {
    console.info(connection.address())
})

connection.on('error', err => {
    console.error(err)
})

connection.on('close', () => {
    console.info('closed connection')
})`
}