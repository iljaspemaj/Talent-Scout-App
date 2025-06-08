const pool = require("../config/db");
const bcrypt = require("bcrypt");

const User = {
  // Regjistro një user të ri
async create(username, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const { rows } = await pool.query(
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email",
    [username, email, hashedPassword]
    );
    return rows[0];
},

  // Gjej user nga email
async findByEmail(email) {
    const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    return rows[0];
},

  // Kontrollo nëse password-i përputhet
async comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
},
};

module.exports = User;