require("dotenv").config();

const email = process.env.MAIL;
const password = process.env.PASSWORD;

module.exports = {email, password}