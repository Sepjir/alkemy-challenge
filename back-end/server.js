const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000
const users = require("./routes/users")
const balance = require("./routes/balance")
const incomes = require("./routes/income")
const types = require("./routes/type")
const categories = require("./routes/category")
app.use(cors())


app.use(express.json())
app.use(express.urlencoded({extended: true}))


// api
// users route
app.use("/api/v1", users)

// income route
app.use("/api/v1", incomes)

// income route
app.use("/api/v1", balance)

// type route
app.use("/api/v1", types)

// categories route
app.use("/api/v1", categories)

// root route
app.get("/", (req, res) => {
    res.send("Servidor funcionando")
})





app.listen(port, () => console.log(`Servidor levantado en ${port}`))