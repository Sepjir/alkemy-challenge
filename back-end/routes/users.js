const express = require("express")
const router = express.Router()

router
    .route("/users")
    .get((req, res) => {
        res.send("ruta /users funcionando")
    })
    .post((req, res) => {
        const {name, email, password} = req.body

    })
    .put((req, res) => {

    });

router
    .route("/users/:id")
    .delete((req, res) => {
        
    })    

module.exports = router