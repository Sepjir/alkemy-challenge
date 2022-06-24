const express = require("express")
const router = express.Router()
const {add_user, get_users, get_user} = require("../queries/queryUser")

router
    .route("/users")
    .get(async (req, res) => {
        try {
            const response = await get_users()
            res.status(200).send(response)

        } catch (error) {
            console.log(error)
        }
    })
    .post(async (req, res) => {
        const {name, email, password} = req.body
        try {
            await add_user(name, email, password)
            console.log(`Usuario ${name} registrado`)
            res.status(200).redirect("http://localhost:3000/register")
        } catch (error) {
            console.log(error)
        }

    })
    .put((req, res) => {

    });

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
    .delete((req, res) => {
        
    })    

module.exports = router