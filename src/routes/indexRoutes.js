const express = require('express')

const IndexController = require('../controller/IndexController')


const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title : 'Home Page',
        layout : 'layouts/main-layout'
    })
})
router.get('/about', (req, res) => {
    res.render('about', {
        title : 'About Page',
        layout : 'layouts/main-layout'
    })
})

router.get('/contact', (req, res) => {
    res.render('contact', {
        title : 'Contact Page',
        layout : 'layouts/main-layout'
    })
})

router.post('/contact', IndexController.sendingEmail)


module.exports = router