const express = require('express')
const { server } = require('./config')
const user = require('./models/user/routes')
const app = express()

app.set('port', server.port)

//ROUTES
app.use('/user', user)

app.listen(app.get('port'), () =>
  console.log(`Server on: http://${server.host}:${app.get('port')}`)
)
