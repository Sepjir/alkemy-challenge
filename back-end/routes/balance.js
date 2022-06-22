const express = require("express")
const router = express.Router()


router
    .route("/balance")
    .get((req, res) => {
        res.send("Hola desde /balances")
    })


module.exports = router