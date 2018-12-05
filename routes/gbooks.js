const express = require('express')
const router = express.Router()
const gBooks = require('../data.json')

router.get('/', (req, res, next) => {
    res.json({
        gBooks
    })
})

router.get('/:id', (req,res,next) => {
    const id = req.params.id
    const filtered = gbooks.filter(book => {
        return book.id == id
    })
    res.json({
        book: filtered[0]
    })
})

module.exports = router