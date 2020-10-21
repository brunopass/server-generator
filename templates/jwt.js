module.exports = () => {
    return`const {verify,sign} = require('jsonwebtoken')
const config = require('../../config')

const signJwt = payload => {
    return sign(payload, config.PUBLIC_KEY)
}

const verifyJwt = token => {
    return verify(token, config.PRIVATE_KEY)
}

module.exports = {
    signJwt,
    verifyJwt
}`


}