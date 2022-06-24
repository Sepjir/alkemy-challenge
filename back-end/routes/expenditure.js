const express = require("express")
const router = express.Router()
const {report_expenditure} = require("../queries/queryReport")

router
    .route("/expenditures")
    .get(async (req, res) => {
        const response = await report_expenditure()
        res.status(200).send(response)
    })

module.exports = router