require('dotenv').config()

const { Pool } = require('pg')
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})




async function report_income() {
    try {
        const result = await pool.query("SELECT income.concept, categories.category_name, income.amount, types.name_type, to_char(income.income_date, 'DD/MM/YYY') FROM income INNER JOIN categories ON (income.category_id = categories.id) INNER JOIN types ON (categories.type_id = types.id) ORDER BY income.income_date;")
        return result.rows
    } catch (e) {
        return e
    }
}

async function report_expenditure() {
    try {
        const result = await pool.query("SELECT expenditures.concept, categories.category_name, expenditures.amount, types.name_type, to_char(expenditures.expenditure_date, 'DD/MM/YYY') FROM expenditures INNER JOIN categories ON (expenditures.category_id = categories.id) INNER JOIN types ON (categories.type_id = types.id) ORDER BY expenditures.expenditure_date;")
        return result.rows
    } catch (e) {
        return e
    }
}


module.exports = {report_income, report_expenditure}