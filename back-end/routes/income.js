const express = require("express")
const router = express.Router()
const {get_balance, add_balance, get_balance_user, balance_addition, balance_discount} = require("../queries/queryBalance")
const {add_income} = require("../queries/queryIncome")
const {add_expenditure} = require("../queries/queryExpenditure")
const {report_income} = require("../queries/queryReport")


router
    .route("/income")
    .get(async (req, res) => {
        const response = await report_income()
        res.status(200).send(response)
    })
    .post(async (req, res) => {
        const {type, concept, amount, date, category, userid} = req.body
        const balance =  await get_balance()
        const findBalance = balance.find((item) => item.user_id == userid)
        if (!findBalance) {
            try {
                if (type == 1) {
                    await add_income(concept, amount, date, category, userid)
                    await add_balance(userid, amount)
                    res.status(200).redirect("http://localhost:3000/dashboard")
                    return
                } if (type == 2) {
                    res.status(500).send({
                        error: "Aún no se ha hecho un ingreso, el balance no puede ser negativo",
                        volver: 'http://localhost:3000/dashboard'
                    })
                    return
                }
            } catch (e) {
                console.log(e)
            }
            
        } else {
            try {
                if (type == 1) {
                    await add_income(concept, amount, date, category, userid)
                    await balance_addition(userid, amount)
                    res.status(200).redirect("http://localhost:3000/dashboard")
                    return
                } if (type == 2) {
                    await add_expenditure(concept, amount, date, category, userid)
                    await balance_discount(userid, amount)
                    res.status(200).redirect("http://localhost:3000/dashboard")
                    return
                }
            } catch (e) {
                console.log(e)
            }
        }

    })

router
    .route("/income/:id")
    .put((req, res) => {

    })
    .delete((req, res) => {

    })


module.exports = router