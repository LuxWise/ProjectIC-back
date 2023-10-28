import express from 'express';
import dotenv from 'dotenv';
import mysql from "mysql2";
import jwt from 'jsonwebtoken';

const loginRoute = express.Router();

dotenv.config();

const database = mysql
  .createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  })

loginRoute.post('/login', (req, res) => {
  const { usuario, contrasenia } = req.body;

  database.query(
    'SELECT * FROM usuarios WHERE usuario = ? AND  contrasenia = ?',
    [usuario, contrasenia],
    (err, result) => {
      if (err) {
        res.status(500).send(err)
      } else {
        if (result.length > 0) {
          const token = jwt.sign({ usuario }, "Stack", {
            expiresIn: '3m'
          });
          res.send(token)
        } else {
          res.status(400).send('Usuario no existe')
        }
      }
    }
  );
})

export default loginRoute