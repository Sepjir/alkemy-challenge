const express = require("express")
const router = express.Router()


router
    .route("/income")
    .get((req, res) => {
        
    })
    .post((req, res) => {
        const {concept, amount, date, category, userId} = req.body
    })

router
    .route("/income/:id")
    .put((req, res) => {

    })
    .delete((req, res) => {

    })


module.exports = router