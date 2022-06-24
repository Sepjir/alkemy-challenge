const express = require("express")
const router = express.Router()
const { get_categories } = require("../queries/queryCategory")



router
    .route("/categories")
    .get(async (req, res) => {
        const response =  await get_categories()
        res.status(200).send(response)
    })




module.exports = router