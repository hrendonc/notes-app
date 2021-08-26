const router = require('express').Router()

router.get('/', (req, res)=>{
    res.send('Index')
})

router.get('/about', (req, res)=>{
    res.send('About')
})

router.get('/services', (req, res)=>{
    res.send('Servicios')
})

module.exports = router
