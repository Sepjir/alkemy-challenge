require('dotenv').config()

const { Pool } = require('pg')
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
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

async function mod_expenditure(id, concept, amount) {
    try {
        const result = await pool.query("UPDATE expenditures SET amount = $3, concept =$2 WHERE id = $1 RETURNING*;",
        [`${id}`,`${concept}`,`${amount}`])
    } catch (e) {
       return console.log(e)
    }
}

async function delete_expenditure(id) {
    try {
        const result = await pool.query("DELETE FROM expenditures WHERE id = $1;",
        [`${id}`])
    } catch (e) {
       return console.log(e)
    }
}


module.exports = {add_expenditure, mod_expenditure, delete_expenditure}