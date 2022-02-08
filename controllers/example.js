const { response } = require('express')

const getExample = (req, res = response) => {
  const { name = '', apikey, page = 1, limit = 10} = req.query
  res.json({
    message: 'Getting data ...',
    name,
    apikey,
    page,
    limit
  })
}

const createExample = (req, res = response) => {
  const { name, age } = req.body 

  res.status(201).json({
    message: 'Data created',
    name, 
    age
  })
}
const updateExample =  (req, res = response) => {
  const id = req.params.id 

  res.json({
    message: `Data with ID ${id} updated`
  })
}

const deleteExample =  (req, res = response) => {
  const id = req.params.id 

  res.json({
    message: `Data with ID ${id} deleted`
  })
}

module.exports = {
  getExample,
  createExample,
  updateExample,
  deleteExample
}
