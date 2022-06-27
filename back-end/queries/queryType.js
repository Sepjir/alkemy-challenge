require('dotenv').config()

const { Pool } = require('pg')
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
    
})

async function get_type() {
    try {
        const result = await pool.query("SELECT * FROM types;")
        return result.rows
    } catch (e) {
        return e
    }
}

module.exports = {get_type}