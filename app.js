const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8000
const routes = require('./src/routes')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use("/v1", routes)

app.listen(port, () => {
  console.log(`Listening on port ${ port }`)
})