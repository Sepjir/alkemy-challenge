require('dotenv').config()

const { Pool } = require('pg')
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

async function add_expenditure(concept, amount, date, category, userid) {
    try {
        const result = await pool.query("INSERT INTO expenditures (concept, amount, expenditure_date, category_id, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING*;",
        [`${concept}`, `${amount}`,`${date}`,`${category}`,`${userid}`]
        )
        return result.rows
    } catch (e) {
        console.log(e)
    }
}


module.exports = {add_expenditure}