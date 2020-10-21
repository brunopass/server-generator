module.exports = args => {
    return`const dotenv = require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,
    ORIGIN: process.env.ORIGIN,
    PUBLIC_KEY: require('./keys/keys.json').public,
    PRIVATE_KEY: require('./keys/keys.json').private,
    MONGO_URI: process.env.MONGO_URI
}`
}


