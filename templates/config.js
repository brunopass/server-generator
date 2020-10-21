module.exports = config => {
    return`const dotenv = require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,
    ORIGIN: process.env.ORIGIN,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    PRIVATE_KEY: process.env.PRIVATE_KEY
}`
}


