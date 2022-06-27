const express = require("express")
const router = express.Router()
const {add_user, get_users, get_user} = require("../queries/queryUser")

router
    .route("/users")
    .get(async (req, res) => {
        try {
            const response = await get_users()
            const mapResponse = response.map((u) => {
                return {...u, "balance": `https://ignacio-finanzas-app.herokuapp.com/api/v1/balance/${u.id}`, "income": `https://ignacio-finanzas-app.herokuapp.com/api/v1/income/${u.id}`, "expenditure": `https://ignacio-finanzas-app.herokuapp.com/api/v1/expenditures/${u.id}`}
            })
            res.status(200).send(mapResponse)

        } catch (error) {
            console.log(error)
        }
    })
    .post(async (req, res) => {
        const {data} = req.body
        const {name, email, password} = data
        try {
            const response = await add_user(name, email, password)
            console.log(`Usuario ${name} registrado`)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
        }

    })

router
    .route("/user/:id")
    .get(async (req, res) => {
        const {id} = req.params
        try {
            const response = await get_user(id)
            res.status(200).send(response)
            
        } catch (error) {
            console.log(error)
        }
    })    

module.exports = router