module.exports = route = (method) => {
    return `const router = require('express').Router()
const status = require('status-parser')

router.${method}('/', (req,res) => {
    status.success(res).OK()
})

module.exports = router`
}