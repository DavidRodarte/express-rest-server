const express = require('express')
const cors = require('cors')

class Server {

  constructor() {
    // Config
    this.app = express()
    this.port = process.env.PORT
    
    // Route paths
    this.examplePath = '/api/example'

    // Middlewares
    this.middlewares()
    // App routes
    this.routes()
  }

  middlewares() {
    // CORS
    this.app.use(cors())

    // Parse and read requests
    this.app.use( express.json() )

    // Public directory
    this.app.use( express.static('public') )
  }
  
  routes() {
    // Example routes 
    this.app.use(this.examplePath, require('../routes/example'))
  }

  listen(){
    this.app.listen(this.port, () => console.log(`Server running on port ${this.port}`))
  }
}

module.exports = Server
