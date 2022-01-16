//configs/database.js
const {Pool} = require('pg');

const conString = "postgres://txuqhayb:XIf9yOGVKRntmZu9xE2-JOlTbFKYWw4e@tyke.db.elephantsql.com/txuqhayb" //Can be found in the Details page
const config = {
  connectionString: conString
}
const db = new Pool(config);
db.connect().then(() => console.log(`db connected on ${conString}`)).catch(err => console.error('connection error', err.stack))

module.exports = db;
