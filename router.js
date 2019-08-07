const express = require ('express')
const router = express.Router()

router.get('/', function(req,res) {
    res.render('home-guest')
})
router.get('/test', function (req, res) {
    res.render('test')
})
module.exports = router