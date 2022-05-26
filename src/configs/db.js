const { Pool } = require("pg")

const db = new Pool({
   user: "postgres",
   host: "localhost",
   database: "travelio",
   password: "qwerty",
   port: 5432
})

module.exports = db