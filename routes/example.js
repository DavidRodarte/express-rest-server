const { Router } = require('express')
const router = Router()

const { getExample, createExample, updateExample, deleteExample } = require('../controllers/example')

router.get('/', getExample)

router.post('/', createExample )
router.put('/:id', updateExample)
router.delete('/:id', deleteExample)

module.exports = router
