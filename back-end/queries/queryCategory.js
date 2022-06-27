require('dotenv').config()

const { Pool } = require('pg')
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

async function get_categories() {
    try {
        const result = await pool.query("SELECT * FROM categories;")
        return result.rows
    } catch (e) {
        return e
    }
}

module.exports = {get_categories}