const express = require("express")
const router = express.Router()
const { get_type } = require("../queries/queryType")



router
    .route("/type")
    .get(async (req, res) => {
        const response =  await get_type()
        res.status(200).send(response)
    })




    module.exports = router