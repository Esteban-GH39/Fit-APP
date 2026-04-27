import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "egh30081223",
  database: "fit_app",
});

export default db;