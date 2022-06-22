const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000
const users = require("./routes/users")
const incomes = require("./routes/income")
const expenditures = require("./routes/expenditures")
const balance = require("./routes/balance")
app.use(cors())


app.use(express.json())
app.use(express.urlencoded({extended: true}))


// api
// users route
app.use("/api/v1", users)

// income route
app.use("/api/v1", incomes)

// expenditure route
app.use("/api/v1", expenditures)

// balance route
app.use("/api/v1", balance)

// root route
app.get("/", (req, res) => {
    res.send("Servidor funcionando")
})





app.listen(port, () => console.log(`Servidor levantado en ${port}`))